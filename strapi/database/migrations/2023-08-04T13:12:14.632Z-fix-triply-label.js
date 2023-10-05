const axios = require('axios')

let failedCount = 0
const DEFAULT_LABEL = '-'

module.exports = {
  async up(knex) {
    try {
      const res = await knex.raw('SELECT id, record_id "recordId", "type" FROM triply_records')

      if (!res || !res.rows || !res.rows.length) {
        console.log('no triply records to migrate, returning')
        return
      }

      for (const { id, recordId, type } of res.rows) {
        const label = await getLabel({ recordId, type })
        await knex.from('triply_records').update({ label }).where({ id })
      }
      console.log(`${failedCount} out of ${res.rows.length} failed`)
    } catch {
      console.log("migration failed, if you are not using a blank db, this shouldn't happen")
    }
  },
}

async function getLabel({ recordId, type }) {
  try {
    const res = await axios.get(`${process.env.GATEWAY_BASE_URL}/zoomLevel5/detail`, {
      params: { recordId, type },
      headers: { 'x-api-key': process.env.GATEWAY_API_TOKEN },
    })

    return `${getLabelFromTriplyData(res.data, type)} (${recordId}/${type})`
  } catch (err) {
    console.log(`failed to get the label for ${recordId} ${type}.`)
    failedCount++

    return `${DEFAULT_LABEL} (${recordId}/${type})`
  }
}

function getLabelFromType(triplyData, type) {
  switch (type) {
    case 'Archive':
    case 'Object':
    case 'Publication':
      return `${triplyData.objectNumber || DEFAULT_LABEL} ${triplyData.title || DEFAULT_LABEL}`
    case 'People':
      return triplyData.title || DEFAULT_LABEL
    default:
      return DEFAULT_LABEL
  }
}

function getLabelFromTriplyData(triplyData, type) {
  let label = getLabelFromType(triplyData, type)

  label = label?.trim() || DEFAULT_LABEL

  if (label.length > 200) {
    return label.slice(0, 200) + '...'
  }

  return label
}
