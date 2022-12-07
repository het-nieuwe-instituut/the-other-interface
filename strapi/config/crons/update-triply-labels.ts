import { Strapi } from "@strapi/strapi";
import { TriplyRecordService } from "../../src/api/triply-record/services/triply-record";

interface FailedRecordData {
  recordId: string;
  type: string;
  errorText: string;
}

const timeToSleep = 50;
const limit = 100;
const triplyApi = "api::triply-record.triply-record";

export default async function (strapi: Strapi) {
  const start = new Date().getTime();

  const total = await strapi.db.query(triplyApi).count("*");
  const failedRecordData: FailedRecordData[] = [];

  for (let offset = 0; offset < total; offset += limit) {
    console.log(`Updating ${offset}-${offset + limit} of ${total}...`);

    const records = await strapi.db
      .query(triplyApi)
      .findMany({ limit, offset });

    for (const record of records) {
      await updateRecordLabel(record, (failedData) =>
        failedRecordData.push(failedData)
      );
      await new Promise((resolve) => setTimeout(resolve, timeToSleep));
    }

    const totalTime = Math.ceil((new Date().getTime() - start) / 1000);
    const slept = Math.ceil((timeToSleep * limit) / 1000);

    console.log(`iteration took ${totalTime}s, slept ${slept}s`);
  }

  const totalTime = Math.ceil((new Date().getTime() - start) / 1000);
  const slept = Math.ceil((timeToSleep * total) / 1000);
  console.log(`in total, took ${totalTime}s, slept ${slept}s`);
  console.log(`failed ${failedRecordData.length} out of ${total}`);
}

async function updateRecordLabel(
  record,
  onError: (data: FailedRecordData) => void
) {
  const { id, recordId, type } = record;

  const label = await strapi.service<TriplyRecordService>(triplyApi).getLabel({
    recordId,
    type,
    onError: (failedData) => onError(failedData),
  });

  await strapi.db.query(triplyApi).update({ where: { id }, data: { label } });
}
