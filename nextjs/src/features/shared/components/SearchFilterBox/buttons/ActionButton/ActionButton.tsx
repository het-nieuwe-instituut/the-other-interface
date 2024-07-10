import { cn } from '@/features/ui/utils/cn'
import React from 'react'

interface ActionButtonProps {
  id?: string
  onClick?: (id: string) => void
  children: React.ReactNode
  className?: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ id, onClick, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClick && id) {
      e.stopPropagation()
      onClick(id)
    }
  }

  if (!onClick) {
    return <div className={cn('relative size-2', className)}>{children}</div>
  }

  return (
    <button
      className={cn(
        'relative size-4 flex items-center justify-center hover:bg-black-100',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
