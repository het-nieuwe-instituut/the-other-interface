import type { NextPage } from 'next'
import tailwind from './../../../../tailwind.config'

const Page: NextPage = () => {
  const bordersObj = tailwind.theme?.extend?.borderColor
  if (!bordersObj) return null
  const borderKeys = Object.keys(bordersObj)
  const borderValues = Object.values(bordersObj)
  return (
    <div className="flex flex-col gap-4">
      <p>Border</p>
      {borderKeys.map((v, i) => (
        <div key={v} className="flex flex-col gap-4">
          <div>
            <p className="font-bold">{v}</p>
            <p>{borderValues[i]}</p>
            tw: {`<div className="w-full border-b border-b-${v}" />`}
          </div>
          <div className="w-full border-b" style={{ borderColor: borderValues[i] }} />
        </div>
      ))}
    </div>
  )
}

export default Page
