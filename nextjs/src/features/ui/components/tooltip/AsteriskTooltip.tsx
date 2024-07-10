import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { SourceTooltip, SourceTooltipProps } from './SourceTooltip'
import Asterisk from '@/features/ui/icons/asterisk-thin.svg'
import { cn } from '../../utils/cn'

export interface AsteriskTooltipProps
  extends Omit<SourceTooltipProps, 'readMoreHref' | 'readMoreText' | 'Icon'> {}
export const AsteriskTooltip = (props: AsteriskTooltipProps) => {
  const { t } = createTypeSafeTranslation('common')
  return (
    <SourceTooltip
      tooltipContainerClassName={
        'bg-surface-asterisk text-surface-asterisk-dark font-times-niw-rimmin text-[16px] font-[500]'
      }
      titleClassName="leading-[100%] text-[17px] font-[600] -mt-1 block"
      learnMoreClassName={cn('underline leading-[17px] font-[600]  block')}
      readMoreHref={'/asterisk'}
      readMoreText={
        <div className="gap-1 flex items-center">
          {t('learnAboutAsterisk')} <Asterisk />
        </div>
      }
      Icon={<Asterisk />}
      {...props}
    />
  )
}
