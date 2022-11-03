import { Box, Flex, Text } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
// import { useEffect, useState } from 'react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'
import setLanguage from 'next-translate/setLanguage'

export const GalaxyTopRight: React.FC = () => {
    const { lang } = useTranslation()
    // const [EN, setENUrl] = useState('')
    // const [NL, setNLUrl] = useState('')

    // useEffect(() => {
    //     initUrls()
    // })

    return (
        <Box>
            <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <GalaxyButton text={'NL'} size={'sm'} disabled={lang === 'nl'} onClick={async () => await setLanguage('nl')}/>
                <Text margin={0}>|</Text>
                <GalaxyButton text={'EN'} size={'sm'} disabled={lang === 'en'} onClick={async () => await setLanguage('en')} />
            </Flex>
        </Box>
    )

    // function initUrls() {
    //     setENUrl(enUrl())
    //     setNLUrl(nlUrl())
    // }

    // function enUrl(): string {
    //     if (typeof window !== 'undefined') {
    //         const path = window.location.pathname
    //         const href = window.location.href
    //         const origin = window.location.origin

    //         if (path.startsWith('/nl')) {
    //             return href.replace(`${origin}/nl`, `${origin}/en`)
    //         }

    //         return href
    //     }

    //     return ''
    // }

    // function nlUrl(): string {
    //     if (typeof window !== 'undefined') {
    //         const path = window.location.pathname
    //         const href = window.location.href
    //         const origin = window.location.origin

    //         if (path.startsWith('/en')) {
    //             return href.replace(`${origin}/en`, `${origin}/nl`)
    //         }

    //         return href
    //     }

    //     return ''
    // }
}
