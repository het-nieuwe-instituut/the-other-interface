'use client'
import { useDispatch } from 'react-redux'
import { sharedActions } from '../../stores/shared.store'
import { useEffect } from 'react'
/**
 * @deprecated DO NOT USE ON NEW FEATURES - this component only exists to sync the draft mode state with the redux store, this only exists because redux was not setup right. Better solution would be to pass isDraftMode directly when the store is setup client side or simply keep track of it in the url bar
 */
export const ReduxDraftModeSync = ({ isDraftMode }: { isDraftMode: boolean }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sharedActions.draftMode({ isDraftMode }))
  }, [dispatch, isDraftMode])

  return null
}
