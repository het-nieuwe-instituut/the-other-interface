const axios = require("axios");

let failedCount = 0;

module.exports = {
  async up(knex) {
    const res = await knex.raw(
      'SELECT id, record_id "recordId", "type" FROM triply_records'
    );
    if (!res || !res.rows || !res.rows.length) {
      console.log("no triply records to migrate, returning");
      return;
    }

    for (const { id, recordId, type } of res.rows) {
      const label = await getLabel({ recordId, type });
      await knex.from("triply_records").update({ label }).where({ id });
    }

    console.log(`${failedCount} out of ${res.rows.length} failed`);
  },
};

async function getLabel({ recordId, type }) {
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
    console.log(`failed to get the label for ${recordId} ${type}.`);
    failedCount++;

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
