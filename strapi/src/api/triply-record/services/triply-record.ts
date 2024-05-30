/**
 * triply-record service
 */

import axios from 'axios'

export default () => ({
  getLabel,
})

export interface GetLabelParams {
  recordId: string
  type: string
  onError?: (params: Pick<GetLabelParams, 'recordId' | 'type'> & { errorText: string }) => void
}

async function getLabel(args: GetLabelParams): Promise<string> {
  const { onError, recordId, type } = args

  try {
    const res = await axios.get(`${process.env.GATEWAY_BASE_URL}/zoomLevel3/detail`, {
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

const DEFAULT_LABEL = '-'

function getLabelFromType(triplyData, type): string {
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

function getLabelFromTriplyData(triplyData, type): string {
  let label = getLabelFromType(triplyData, type)

  label = label?.trim() || DEFAULT_LABEL

  if (label.length > 200) {
    return label.slice(0, 200) + '...'
  }

  return label
}
