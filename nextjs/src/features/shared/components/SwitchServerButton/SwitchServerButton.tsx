import { Button } from '@chakra-ui/react'
import usePresenter from './usePreseter'
import { SWITCH_SERVER_Z_INDEX } from '../../constants/mainConstants'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { getCookie } from 'cookies-next'

function SwitchServerButton() {
  const { handleClick } = usePresenter()
  const { t } = useTypeSafeTranslation('common')

  if (process.env.NEXT_PUBLIC_ENV !== 'test') return null

  return (
    <Button
      zIndex={SWITCH_SERVER_Z_INDEX}
      position={'absolute'}
      top={10}
      left={8}
      w={350}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      h={14}
      onClick={handleClick}
    >
      {getCookie('isMockedServer') ? t('switchToLiveServer') : t('switchToMockedServer')}
    </Button>
  )
}

export default SwitchServerButton
