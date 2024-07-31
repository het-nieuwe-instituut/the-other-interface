import CrossIcon from '@/icons/cross-icon.svg'

type Props = {
  onClick: () => void
}

export const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="close">
      <CrossIcon />
    </button>
  )
}
