import NodeFS from 'fs'
import NextLink from 'next/link'

export default function Page() {
  const fs = NodeFS
  const basepath = './src/app/ks'
  const paths = fs
    .readdirSync(basepath)
    .filter(path => fs.statSync(`${basepath}/${path}`).isDirectory())
  // links of path folders in folder
  return (
    <div className="flex flex-col gap-2 pb-10">
      {paths.map(path => {
        return (
          <NextLink className="underline" href={`/ks/${path}`} key={path}>
            {path}
          </NextLink>
        )
      })}
    </div>
  )
}
