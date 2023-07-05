import { Flex, Text } from '@chakra-ui/react'
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'

import { MenuButton } from '../../MenuButton/MenuButton'
// import { useEffect, useState } from 'react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'

export const GalaxyTopRight: React.FC = () => {
  const { lang } = useTranslation()
  // const [EN, setENUrl] = useState('')
  // const [NL, setNLUrl] = useState('')

  // useEffect(() => {
  //     initUrls()
  // })

  return (
    <Flex alignItems={'center'}>
      <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        <GalaxyButton
          text={'NL'}
          size={'sm'}
          disabled={lang === 'nl'}
          onClick={async () => await setLanguage('nl')}
        />
        <Text margin={0}>|</Text>
        <GalaxyButton
          text={'EN'}
          size={'sm'}
          disabled={lang === 'en'}
          onClick={async () => await setLanguage('en')}
        />
      </Flex>
      <MenuButton />
    </Flex>
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
