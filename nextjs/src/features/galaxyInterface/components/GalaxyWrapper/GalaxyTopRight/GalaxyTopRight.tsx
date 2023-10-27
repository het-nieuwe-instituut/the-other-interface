'usc client'
import { Flex, Link } from '@chakra-ui/react'
import { Fragment } from 'react'
import { LOCALES } from '@/features/shared/constants/locales'

import { MenuButton } from '../../../../shared/components/MenuButton/MenuButton'
import { usePresenter } from './usePresenter'

import { State } from '@/features/shared/configs/store'
import { useSelector } from 'react-redux'
import { getLanguageToggleColor } from './getLanguageToggleColor'

export const GalaxyTopRight: React.FC = () => {
  const { changeLanguage, lang } = usePresenter()
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  return (
    <Flex alignItems={'center'}>
      <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        {LOCALES.map(locale => {
          return (
            <Fragment key={locale}>
              <Link
                href={'/'}
                variant={isMenuOpen ? 'navigation' : 'navigationOnTopOfTheGalaxy'}
                cursor="pointer"
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}
                textStyle={'socialLarge.lg'}
                mr={4}
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(locale)
                  e.currentTarget.blur()
                }}
                color={getLanguageToggleColor(isMenuOpen, lang === locale)}
              >
                {locale.toUpperCase()}
              </Link>
            </Fragment>
          )
        })}
      </Flex>
      <MenuButton />
    </Flex>
  )
}
