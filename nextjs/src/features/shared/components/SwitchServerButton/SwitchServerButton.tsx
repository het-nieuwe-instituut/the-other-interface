import { MenuItem } from '@chakra-ui/react'
import { getCookie } from 'cookies-next'

import { useTypeSafeTranslation } from '../../hooks/translations'
import usePresenter from './usePreseter'

function SwitchServerButton() {
  const { handleClick } = usePresenter()
  const { t } = useTypeSafeTranslation('common')

  return (
    <MenuItem onClick={handleClick}>
      {getCookie('isMockedServer') ? t('switchToLiveServer') : t('switchToMockedServer')}
    </MenuItem>
  )
}

export default SwitchServerButton
