import { Box, Link, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { Markdown } from '../Markdown/Markdown'
import styles from './PageHeader.module.css'

interface Props {
    title?: string
    preface?: string
    constrainPreface?: boolean
    handleClick?: () => void
    showPointer?: boolean
}

export const PageHeader: React.FC<Props> = ({ title, preface, handleClick, showPointer, constrainPreface }) => {
    const commonT = useTypeSafeTranslation('common')

    const prefaceRef = useRef<HTMLDivElement>(null)
    const [prefaceHeight, setPrefaceHeight] = useState(0)
    const [limitPrefaceHeight, setLimitPrefaceHeight] = useState(!!constrainPreface)

    useEffect(() => {
        if (!prefaceHeight) {
            setPrefaceHeight(prefaceRef.current?.clientHeight ?? 0)
        }
    }, [prefaceRef.current?.clientHeight, prefaceHeight])

    return (
        <Box onClick={handleClick ? handleClick : undefined} cursor={showPointer ? 'pointer' : 'cursor'}>
            <Text as={'h1'} textStyle={'h1'} pb={'md'}>
                {title}
            </Text>
            {preface && (
                <Box mb="1" position="relative">
                    <div
                        ref={prefaceRef}
                        className={shouldLimitPrefaceHeight() ? styles.limitedMarkdownContainer : undefined}
                    >
                        <Markdown>{preface}</Markdown>
                    </div>
                    {shouldLimitPrefaceHeight() && (
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
            <Link onClick={() => setLimitPrefaceHeight(!limitPrefaceHeight)}>
                <Text as="span" color="currentcolor">
                    {commonT.t('readMore')}
                </Text>
            </Link>
        )
    }

    function shouldLimitPrefaceHeight() {
        return limitPrefaceHeight && prefaceHeight > 500
    }
}
