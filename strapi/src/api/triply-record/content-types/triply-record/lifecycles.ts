import fetch from "node-fetch";

export default {
  async beforeCreate(event) {
    if (event.params.data.recordId && event.params.data.type) {
      event.params.data.label = await getLabelForRecord(event.params.data);
    }
  },

  async beforeUpdate(event) {
    if (event.params.data.recordId && event.params.data.type) {
      event.params.data.label = await getLabelForRecord(event.params.data);
    }
  },
};

async function getLabelForRecord({ recordId, type }) {
  try {
    const res = await fetch(
      `${process.env.GATEWAY_BASE_URL}/zoomLevel5/detail?recordId=${recordId}&type=${type}`,
      { headers: { "x-api-key": process.env.GATEWAY_API_TOKEN } }
    );
    const data = await res.json();
    const label = getLabelFromTriplyData(data, type) || "-";

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
