'usc client'
import { Flex, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import { LOCALES } from '@/features/shared/constants/locales'

import { MenuButton } from '../../../../shared/components/MenuButton/MenuButton'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'
import { usePresenter } from './usePresenter'

export const GalaxyTopRight: React.FC = () => {
  const { lang, changeLanguage } = usePresenter()

  return (
    <Flex alignItems={'center'}>
      <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        {LOCALES.map((locale, index) => (
          <Fragment key={locale}>
            <GalaxyButton
              text={locale.toUpperCase()}
              size={'sm'}
              disabled={lang === locale}
              onClick={() => changeLanguage(locale)}
            />
            {index < LOCALES.length - 1 && <Text margin={0}>|</Text>}
          </Fragment>
        ))}
      </Flex>
      <MenuButton />
    </Flex>
  )
}
