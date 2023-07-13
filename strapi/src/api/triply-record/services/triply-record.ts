/**
 * triply-record service.
 */
import { factories } from '@strapi/strapi'
import { Service } from '@strapi/strapi/lib/core-api/service'
import axios from 'axios'

export type TriplyRecordService = Service & {
  getLabel: (params: GetLabelParams) => Promise<string>
}

const DEFAULT_LABEL = '-'

export interface GetLabelParams {
  recordId: string
  type: string
  onError?: (params: Pick<GetLabelParams, 'recordId' | 'type'> & { errorText: string }) => void
}

export default factories.createCoreService(
  'api::triply-record.triply-record',
  ({ strapi }): TriplyRecordService => ({
    getLabel,
  })
)

async function getLabel(args: GetLabelParams): Promise<string> {
  const { onError, recordId, type } = args

  try {
    const res = await axios.get(`${process.env.GATEWAY_BASE_URL}/zoomLevel5/detail`, {
      params: { recordId, type },
      headers: { 'x-api-key': process.env.GATEWAY_API_TOKEN },
    })

    return `${getLabelFromTriplyData(res.data, type)} (${recordId}/${type})`
  } catch (err) {
    const errorText = JSON.stringify(err)

    if (!onError) {
      console.log(
        `[Lifecycles - TriplyRecord] failed to get detail for ${recordId} ${type}.`,
        errorText
      )
    } else {
      onError({ errorText, recordId, type })
    }

    return `- (${recordId}/${type})`
  }
}

function getLabelFromType(triplyData, type): string {
  switch (type) {
    case 'Archive': {
      const title = triplyData.type === 'fonds' ? triplyData.recordTitle : triplyData.title
      return `${triplyData.objectNumber || DEFAULT_LABEL} ${title || DEFAULT_LABEL}`
    }
    case 'Object':
    case 'Publication':
      return `${triplyData.objectNumber || DEFAULT_LABEL} ${triplyData.title || DEFAULT_LABEL}`
    case 'People':
      return triplyData.name
    default:
      return DEFAULT_LABEL
  }
}

function getLabelFromTriplyData(triplyData, type): string {
  let label = getLabelFromType(triplyData, type)

  label = label?.trim() || DEFAULT_LABEL

  if (label.length > 200) {
    return label.slice(0, 200) + '...'
  }

  return label
}
