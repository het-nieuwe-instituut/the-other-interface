'use client'
import { Box, Link, Text } from '../../configs/chakra'
import { useRef } from 'react'

import { useTypeSafeTranslation } from '../../hooks/translations'
import { Markdown } from '../Markdown/Markdown'
import styles from './PageHeader.module.css'
import { useLimitPrefaceHeight } from './useLimitPrefaceHeight'

interface Props {
  title?: string
  preface?: string
  constrainPreface?: boolean
  handleClick?: () => void
  showPointer?: boolean
}

export const PageHeader: React.FC<Props> = ({
  title,
  preface,
  handleClick,
  showPointer,
  constrainPreface,
}) => {
  const commonT = useTypeSafeTranslation('common')

  const prefaceRef = useRef<HTMLDivElement>(null)
  const [limitPrefaceHeight, setLimitPrefaceHeight] = useLimitPrefaceHeight(
    prefaceRef,
    constrainPreface
  )

  return (
    <Box
      onClick={handleClick ? handleClick : undefined}
      cursor={showPointer ? 'pointer' : 'cursor'}
    >
      <Text as={'h1'} textStyle={'h1'} pb={'md'}>
        {title}
      </Text>
      {preface && (
        <Box mb="1" position="relative">
          <div
            ref={prefaceRef}
            className={limitPrefaceHeight ? styles.limitedMarkdownContainer : undefined}
          >
            <Markdown>{preface}</Markdown>
          </div>
          {limitPrefaceHeight && (
            <>
              <div className={styles.blur} />
              {renderReadMoreButton()}
            </>
          )}
        </Box>
      )}
    </Box>
  )

  function renderReadMoreButton() {
    return (
      <Link onClick={() => setLimitPrefaceHeight(false)}>
        <Text as="span" color="currentcolor">
          {commonT.t('readMore')}
        </Text>
      </Link>
    )
  }
}
