import type { NextPage } from 'next'
import tailwind from './../../../../tailwind.config'

const Page: NextPage = () => {
  const colorsObj = tailwind.theme?.extend?.colors
  if (!colorsObj) return null
  const colorKeys = Object.keys(colorsObj)
  const colorValues = Object.values(colorsObj)
  return (
    <div className="flex flex-col gap-4">
      <p>Spacings</p>

      <div className="grid grid-cols-4 gap-4">
        {colorKeys.map((name, index) => {
          const colorsInSubject = colorValues[index]
          const colorsInSubjectKeys = Object.keys(colorsInSubject)
          const colorsInSubjectValues = Object.values(colorsInSubject)

          return (
            <div key={index} className="flex flex-col gap-4">
              <p className=" font-bold">{name}</p>
              {colorsInSubjectKeys.map((v, i) => {
                return (
                  <div key={i} className="flex gap-4">
                    <div
                      className="size-10"
                      style={{ background: colorsInSubjectValues[i] as never }}
                    />
                    <div>
                      <p className=" font-bold">{colorsInSubjectKeys[i]}</p>
                      <p>{colorsInSubjectValues[i] as never}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
