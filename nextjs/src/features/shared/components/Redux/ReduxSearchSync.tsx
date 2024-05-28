'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sharedActions } from '../../stores/shared.store'

export const ReduxSearchSync = () => {
  const pathname = usePathname()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sharedActions.setFilters({ selectedFilters: [] }))
    dispatch(sharedActions.setSearch({ searchValue: '' }))
  }, [dispatch, pathname])

  return null
}
