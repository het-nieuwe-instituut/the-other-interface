import { Strapi } from '@strapi/strapi'
import axios from 'axios'

import { TriplyRecordService } from '../../src/api/triply-record/services/triply-record'

interface FailedRecordData {
  recordId: string
  type: string
  errorText: string
}

const timeToSleep = 50
const limit = 100
const triplyApi = 'api::triply-record.triply-record'

export default async function (strapi: Strapi) {
  const start = new Date().getTime()
  const failedRecordData: FailedRecordData[] = []

  try {
    const total = await strapi.db.query(triplyApi).count('*')
    console.log(`[UpdateTriplyLabels] will attempt to update ${total} records`)

    for (let offset = 0; offset < total; offset += limit) {
      console.log(`[UpdateTriplyLabels] updating ${offset}-${offset + limit}`)

      const records = await strapi.db.query(triplyApi).findMany({ limit, offset })

      for (const record of records) {
        try {
          await updateRecordLabel(record, failedRecordData.push.bind(this))
          await new Promise(resolve => setTimeout(resolve, timeToSleep))
        } catch (err) {
          const { recordId, type } = record
          const errorText = JSON.stringify(err)

          failedRecordData.push({ recordId, type, errorText })
        }
      }

      const totalTime = Math.ceil((new Date().getTime() - start) / 1000)
      const slept = Math.ceil((timeToSleep * limit) / 1000)
      console.log(`[UpdateTriplyLabels] iteration took ${totalTime}s, slept ${slept}s`)
    }

    const totalTime = Math.ceil((new Date().getTime() - start) / 1000)
    const slept = Math.ceil((timeToSleep * total) / 1000)
    console.log(`[UpdateTriplyLabels] in total, took ${totalTime}s, slept ${slept}s`)
    console.log(`[UpdateTriplyLabels] failed ${failedRecordData.length} out of ${total}`)

    await reportToSlack(
      `Periodic triply update successful with ${
        failedRecordData.length
      } failed attempts.\n${JSON.stringify(failedRecordData)}`
    )
  } catch (err) {
    console.log(err)
    await reportToSlack('Periodic triply label update failed.')
  }
}

async function updateRecordLabel(record, onError: (data: FailedRecordData) => void) {
  const { id, recordId, type } = record

  const label = await strapi.service<TriplyRecordService>(triplyApi).getLabel({
    recordId,
    type,
    onError,
  })

  await strapi.db.query(triplyApi).update({ where: { id }, data: { label } })
}

async function reportToSlack(message: string) {
  try {
    await axios.post(
      `${process.env.GATEWAY_BASE_URL}/utils/slackMessage`,
      { message },
      { headers: { 'x-api-key': process.env.GATEWAY_API_TOKEN } }
    )
  } catch (err) {
    console.log('[UpdateTriplyLabels] report to slack failed', err)
  }
}
