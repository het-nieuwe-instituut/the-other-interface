import SearchIcon from '@/icons/search-icon.svg'

type Props = {
  onClick?: () => void
}

export const SearchButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <SearchIcon />
    </button>
  )
}
