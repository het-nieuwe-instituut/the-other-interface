// Import all SVG files from a directory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importAll = (r: any) => {
  const icons = {}
  r.keys().map((item: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(icons as any)[item.replace('./', '') as any] = r(item)
  })
  return icons
}

// Import all SVG files from the directory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: Record<string, { default: any }> = importAll(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (require as any).context('@/features/ui/icons', false, /\.svg$/)
)

// List of icon names
const iconNames = Object.keys(icons)

const Page = () => {
  const keys = Object.keys(icons)
  return (
    <>
      <p>Icons</p>
      example: <br /> <code>{`import IconName from '@/features/ui/icons/icon-name.svg'`}</code>
      <br />
      <hr />
      <div className="grid grid-cols-4 gap-4">
        {iconNames.map((icon, index) => {
          const IconComponent = icons[icon].default

          return (
            <div key={index} className="">
              <p>{keys[index].split('/').reverse()[0]}</p>
              <IconComponent key={index} />{' '}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Page
