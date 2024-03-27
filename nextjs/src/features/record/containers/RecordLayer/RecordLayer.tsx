'use client'
import { RecordMeta } from '../../components/RecordMeta/RecordMeta'
import { RecordBottomContent } from '../RecordBottomContent/RecordBottomContent'
import { RecordHeader } from '../../components/RecordHeader/RecordHeader'
import { LayerWrapper } from '../../../shared/components/Layers/LayerWrapper'

export const RecordLayer = () => {
  return (
    <LayerWrapper
      LeftContent={<RecordHeader />}
      RightContent={<RecordMeta />}
      BottomContent={<RecordBottomContent />}
    />
  )
}
