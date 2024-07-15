/* eslint-disable tailwindcss/no-contradicting-classname */
'use client'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'

import { ExternalSource as ExternalSourceType } from 'src/generated/graphql'
import { useBoolean } from 'usehooks-ts'
import ExternalSource from '../../icons/lod.svg'
import { ExternalSourceBlock, ExternalSourceLink } from './ExternalSource'

export interface ExternalSourceGroupProps {
  children: React.ReactNode
  count: number
}

export const ExternalSourceGroup = ({ children, count }: ExternalSourceGroupProps) => {
  const { t } = createTypeSafeTranslation('common')
  const { value, toggle } = useBoolean()

  return (
    <div className="flex-col">
      <button onClick={() => toggle()}>
        <ExternalSourceBlock>{`${
          value ? t('hideExternalSources', { count }) : t('showExternalSources', { count })
        }`}</ExternalSourceBlock>
      </button>

      <div>{value && children}</div>
    </div>
  )
}

export interface ExternalSourceItemProps {
  children: string
  href: string
  externalSource: ExternalSourceType
}

export const ExternalSourceItem = ({ children, externalSource, href }: ExternalSourceItemProps) => {
  const { t } = createTypeSafeTranslation('common')
  return (
    <div className="relative flex gap-[15px] pb-4 first:pt-4">
      <div className=" flex h-full items-center justify-center">
        <div className="absolute top-0 h-full w-[3px] bg-surface-lod"></div>
        <div className="z-10 flex size-[30px] items-center justify-center rounded-full bg-surface-lod text-surface-lod-dark">
          <ExternalSource />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {externalSource && (
          <p className=" mt-2 inline-block font-arial-reboot-lines text-[12px] font-[600] leading-[15px] ">
            {t('pulledFrom')}{' '}
            <ExternalSourceLink
              className="items-center"
              externalSourceUrl={href}
              externalSourceType={externalSource}
            />
          </p>
        )}

        <p className=" block  font-arial-reboot-lines text-[22px] font-[600] leading-[22.7px] ">
          {children}
        </p>
      </div>
    </div>
  )
}
