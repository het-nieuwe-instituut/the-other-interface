import React from 'react'

interface ActionButtonProps {
  id?: string
  onClick?: (id: string) => void
  children: React.ReactNode
}

const ActionButton: React.FC<ActionButtonProps> = ({ id, onClick, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClick && id) {
      e.stopPropagation()
      onClick(id)
    }
  }

  return (
    <button className="relative size-2" onClick={handleClick}>
      {children}
    </button>
  )
}

export default ActionButton