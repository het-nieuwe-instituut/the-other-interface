type ArrowIconProps = {
  fill?: string
  rotation?: string
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ rotation = 'rotate(0deg)' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: rotation }}
  >
    <g id="Arrow Right">
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1234 3.05957L17.0532 9.99987L10.1234 16.9402L10.1234 10.5554H2.36133V9.44431H10.1234V3.05957Z"
        fill={'currentColor'}
      />
    </g>
  </svg>
)
