import NodeFS from 'fs'
import NextLink from 'next/link'

const generalPathKeys = ['borders', 'colour', 'spacings', 'typography']
export default function Page() {
  const fs = NodeFS
  const basepath = './src/app/ks'
  const paths = fs
    .readdirSync(basepath)
    .filter(path => fs.statSync(`${basepath}/${path}`).isDirectory())
  const generalPaths = paths.filter(path => generalPathKeys.includes(path))
  const otherPaths = paths.filter(path => !generalPathKeys.includes(path))
  // links of path folders in folder
  return (
    <div className="flex flex-col gap-2 pb-10">
      <p className="text-xl font-bold">General</p>
      {generalPaths.map(path => {
        return (
          <NextLink className="underline" href={`/ks/${path}`} key={path}>
            {path}
          </NextLink>
        )
      })}
      <p className="text-xl font-bold">Other</p>
      {otherPaths.map(path => {
        return (
          <NextLink className="underline" href={`/ks/${path}`} key={path}>
            {path}
          </NextLink>
        )
      })}
    </div>
  )
}
