'use client'
import { RecordMeta } from '../../Meta/RecordMeta/RecordMeta'
import { RecordHeader } from '../../Record/RecordHeader/RecordHeader'
import { LayerWrapper } from '../LayerWrapper'

export const RecordLayer = () => {
  return <LayerWrapper LeftContent={<RecordHeader />} RightContent={<RecordMeta />} />
}
