'use client'
import { Box, Link, Text } from '../../configs/chakra'
import { useRef } from 'react'
import useScroll from '@/features/shared/hooks/ui/useScroll'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { Markdown } from '../Markdown/Markdown'
import styles from './PageHeader.module.css'
import { useLimitPrefaceHeight } from './useLimitPrefaceHeight'
import { ScrollToContent } from '@/features/pages/utils/utils'

interface Props {
  title?: string
  preface?: string
  constrainPreface?: boolean
}

export const PageHeader: React.FC<Props> = ({ title, preface, constrainPreface }) => {
  const commonT = useTypeSafeTranslation('common')
  const { scrollPosition } = useScroll()

  const prefaceRef = useRef<HTMLDivElement>(null)
  const [limitPrefaceHeight, setLimitPrefaceHeight] = useLimitPrefaceHeight(
    prefaceRef,
    constrainPreface
  )

  return (
    <Box onClick={ScrollToContent} cursor={scrollPosition < 750 ? 'pointer' : 'cursor'}>
      <Text as={'h1'} textStyle={'h1'} pb={'md'}>
        {title}
      </Text>
      {preface && (
        <Box position="relative" maxW={'64em'}>
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
