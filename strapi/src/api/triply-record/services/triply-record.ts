/**
 * triply-record service.
 */

import axios from "axios";
import { factories } from "@strapi/strapi";
import { Service } from "@strapi/strapi/lib/core-api/service";

export type TriplyRecordService = Service & {
  getLabel: (params: { recordId: string; type: string }) => Promise<string>;
};

export default factories.createCoreService(
  "api::triply-record.triply-record",
  ({ strapi }): TriplyRecordService => ({
    getLabel,
  })
);

async function getLabel({ recordId, type }): Promise<string> {
  try {
    const res = await axios.get(
      `${process.env.GATEWAY_BASE_URL}/zoomLevel5/detail`,
      {
        params: { recordId, type },
        headers: { "x-api-key": process.env.GATEWAY_API_TOKEN },
      }
    );

    const label = getLabelFromTriplyData(res.data, type) || "-";

    return `${label} (${recordId}/${type})`;
  } catch (err) {
    console.log(
      `[Lifecycles - TriplyRecord] failed to get detail for ${recordId} ${type}.`,
      JSON.stringify(err)
    );

    return `- (${recordId}/${type})`;
  }
}

function getLabelFromTriplyData(triplyData, type) {
  switch (type) {
    case "Archive":
      return triplyData.objectNumber;
    case "Object":
      return triplyData.objectNumber;
    case "People":
      return triplyData.name;
    case "Publication":
      return triplyData.title;
    case "Media":
    // not yet implemented
    default:
      return "";
  }
}
