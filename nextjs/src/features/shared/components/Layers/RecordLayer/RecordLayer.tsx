'use client'
import { RecordMeta } from '../../Meta/RecordMeta/RecordMeta'
import { RecordBottomContent } from '../../Record/RecordBottomContent/RecordBottomContent'
import { RecordHeader } from '../../Record/RecordHeader/RecordHeader'
import { LayerWrapper } from '../LayerWrapper'

export const RecordLayer = () => {
  return (
    <LayerWrapper
      LeftContent={<RecordHeader />}
      RightContent={<RecordMeta />}
      BottomContent={<RecordBottomContent />}
    />
  )
}
