import fs from 'fs'

const iconsPath = '../../../src/app/ks/icons'
const Page = async () => {
  const paths = fs.readdirSync(iconsPath)

  const loadComponent = async (path: string) => {
    const Icon = await import(`../../../../${path}`)
    return <Icon />
  }

  const components = await Promise.all(
    paths.map(async path => {
      return await loadComponent(`${iconsPath}/${path}`)
    })
  )

  return (
    <div className="flex flex-col gap-4">
      <p>Icons</p>

      <div className="flex">{components}</div>
    </div>
  )
}

export default Page
