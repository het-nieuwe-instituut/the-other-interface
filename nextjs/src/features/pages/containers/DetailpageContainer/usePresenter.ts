import { sharedActions } from '@/features/shared/stores/shared.store'
import { useDispatch } from 'react-redux'

export const usePresenter = (isDraftMode: boolean) => {
  const dispatch = useDispatch()
  dispatch(sharedActions.draftMode({ isDraftMode }))
}
