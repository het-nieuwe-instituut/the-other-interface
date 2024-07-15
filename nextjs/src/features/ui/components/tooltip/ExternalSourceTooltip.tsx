import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { SourceTooltip, SourceTooltipProps } from './SourceTooltip'
import Lod from '@/features/ui/icons/lod.svg'
import { cn } from '../../utils/cn'

export interface ExternalSourceTooltipProps
  extends Omit<SourceTooltipProps, 'readMoreHref' | 'readMoreText' | 'Icon'> {}
export const ExternalSourceTooltip = (props: ExternalSourceTooltipProps) => {
  const { t } = createTypeSafeTranslation('common')
  return (
    <SourceTooltip
      tooltipContainerClassName={
        'bg-surface-lod text-surface-lod-dark font-arial-reboot-lines text-[16px] font-[500]'
      }
      learnMoreClassName={cn('underline leading-[16px] block')}
      titleClassName="leading-[110%] text-[16px] font-[500] -mt-1 block"
      readMoreHref={'/externalSources'}
      readMoreText={t('learnAboutExternalDataSources')}
      Icon={<Lod />}
      {...props}
    />
  )
}
