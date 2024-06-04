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
          const languageToggleColor = getLanguageToggleColor(isMenuOpen, lang !== locale)
          return (
            <Fragment key={locale}>
              <Link
                href={'/'}
                variant={isMenuOpen ? 'navigation' : 'navigationOnTopOfTheGalaxy'}
                cursor="pointer"
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}
                textStyle={'socialLarge.xl'}
                mr={'10px'}
                onClick={e => {
                  changeLanguage(e, locale)
                }}
                color={languageToggleColor}
                borderBottom={lang === locale ? `1px solid` : 'none'}
                borderColor={languageToggleColor}
                h={'27px'}
                w={'27px'}
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
