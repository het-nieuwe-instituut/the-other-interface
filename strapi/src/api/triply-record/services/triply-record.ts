/**
 * triply-record service.
 */

import axios from "axios";
import { factories } from "@strapi/strapi";
import { Service } from "@strapi/strapi/lib/core-api/service";

export type TriplyRecordService = Service & {
  getLabel: (params: GetLabelParams) => Promise<string>;
};

export interface GetLabelParams {
  recordId: string;
  type: string;
  onError?: (
    params: Pick<GetLabelParams, "recordId" | "type"> & { errorText: string }
  ) => void;
}

export default factories.createCoreService(
  "api::triply-record.triply-record",
  ({ strapi }): TriplyRecordService => ({
    getLabel,
  })
);

async function getLabel(args: GetLabelParams): Promise<string> {
  const { onError, recordId, type } = args;

  try {
    const res = await axios.get(
      `${process.env.GATEWAY_BASE_URL}/zoomLevel5/detail`,
      {
        params: { recordId, type },
        headers: { "x-api-key": process.env.GATEWAY_API_TOKEN },
      }
    );

    return `${getLabelFromTriplyData(res.data, type)} (${recordId}/${type})`;
  } catch (err) {
    const errorText = JSON.stringify(err);

    if (!onError) {
      console.log(
        `[Lifecycles - TriplyRecord] failed to get detail for ${recordId} ${type}.`,
        errorText
      );
    } else {
      onError({ errorText, recordId, type });
    }

    return `- (${recordId}/${type})`;
  }
}

function getLabelFromTriplyData(triplyData, type): string {
  let label;
  switch (type) {
    case "Archive":
      label = triplyData.objectNumber;
    case "Object":
      label = triplyData.objectNumber;
    case "People":
      label = triplyData.name;
    case "Publication":
      label = triplyData.title;
    case "Media":
    // not yet implemented
  }

  label = label?.trim() || "-";

  if (label.length > 200) {
    return label.slice(0, 200) + "...";
  }

  return label;
}
