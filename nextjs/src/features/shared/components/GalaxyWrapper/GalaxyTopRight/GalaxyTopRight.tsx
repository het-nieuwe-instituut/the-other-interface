import { Box, Flex, Text } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'

export const GalaxyTopRight: React.FC = () => {
    const { lang } = useTranslation()
    const [EN, setENUrl] = useState('')
    const [NL, setNLUrl] = useState('')

    useEffect(() => {
        initUrls()
    })

    return (
        <Box>
            <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <GalaxyButton text={'NL'} link={NL} size={'sm'} disabled={lang === 'nl'} />
                <Text margin={0}>|</Text>
                <GalaxyButton text={'EN'} link={EN} size={'sm'} disabled={lang === 'en'} />
            </Flex>
        </Box>
    )

    function initUrls() {
        setENUrl(enUrl())
        setNLUrl(nlUrl())
    }

    function enUrl(): string {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname
            const href = window.location.href
            const origin = window.location.origin

            if (path.startsWith('/nl')) {
                return href.replace(`${origin}/nl`, `${origin}/en`)
            }

            return href
        }

        return ''
    }

    function nlUrl(): string {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname
            const href = window.location.href
            const origin = window.location.origin

            if (path.startsWith('/en')) {
                return href.replace(`${origin}/en`, `${origin}/nl`)
            }

            return href
        }

        return ''
    }
}
