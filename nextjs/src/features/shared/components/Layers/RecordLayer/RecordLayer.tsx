'use client'
import { RecordHeader } from '../../Record/RecordHeader/RecordHeader'
import { LayerWrapper } from '../LayerWrapper'

export const RecordLayer = () => {
  return <LayerWrapper LeftContent={<RecordHeader />} />
}
