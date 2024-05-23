type ArrowIconProps = {
  fill?: string
  rotation?: string
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  fill = '#0051FF',
  rotation = 'rotate(0deg)',
}) => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: rotation }}
  >
    <path d="M0.896484 6L6.89648 12L6.89648 -2.62268e-07L0.896484 6Z" fill={fill} />
    <path d="M6.89648 6H15.5359" stroke={fill} />
  </svg>
)
