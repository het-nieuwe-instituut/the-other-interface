'use client'
import {
  DynamicComponentRenderer,
  DynamicComponents,
} from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '../LayerWrapper'
import { PageHeader } from '../../PageHeader/PageHeader'

interface Props {
  title?: string | null
  preface?: string | null
  components: DynamicComponents
}

export const EditorialLayer: React.FC<Props> = ({ title, preface, components }) => {
  return (
    <LayerWrapper
      LeftContent={<PageHeader title={title || undefined} preface={preface || undefined} />}
      BottomContent={<DynamicComponentRenderer components={components} />}
    />
  )
}
