/* eslint-disable tailwindcss/no-contradicting-classname */
'use client'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { AsteriskSourceBlock } from './AsteriskSource'
import Asterisk from '../../icons/asterisk-thin.svg'
import { useBoolean } from 'usehooks-ts'

export interface AsteriskAnnotationGroupProps {
  children: React.ReactNode
  count: number
}

export const AsteriskAnnotationGroup = ({ children, count }: AsteriskAnnotationGroupProps) => {
  const { t } = createTypeSafeTranslation('common')
  const { value, toggle } = useBoolean()

  return (
    <div className="flex-col">
      <button onClick={() => toggle()}>
        <AsteriskSourceBlock>{`${
          value ? t('hideAsterisk', { count }) : t('showAsterisk', { count })
        }`}</AsteriskSourceBlock>
      </button>

      {value && children}
    </div>
  )
}

export interface AsteriskAnnotationItemProps {
  title: string
  children: string
  author: string
  date: string
}

export const AsteriskAnnotationItem = ({ children, author, date }: AsteriskAnnotationItemProps) => {
  const { t } = createTypeSafeTranslation('common')
  return (
    <div className=" relative flex gap-[15px] pb-4">
      <div className=" flex h-full items-center justify-center pt-4">
        <div className="absolute top-0 h-full w-[3px] bg-surface-asterisk"></div>
        <div className="z-10 flex size-[30px] items-center justify-center rounded-full bg-surface-asterisk text-surface-asterisk-dark">
          <Asterisk />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className=" mt-2 block font-times-niw-rimmin text-[12px] font-[600] leading-[15px] ">
          {t('asteriskMeta', { author, date })}
        </p>
        <p className=" block font-times-niw-rimmin text-[22px] font-[600] leading-[22.7px] ">
          {children}
        </p>
      </div>
    </div>
  )
}
