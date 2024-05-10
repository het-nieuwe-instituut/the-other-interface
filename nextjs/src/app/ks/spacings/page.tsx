import type { NextPage } from 'next'
import tailwind from './../../../../tailwind.config'

const Page: NextPage = () => {
  const spacingObj = tailwind.theme?.extend?.spacing
  if (!spacingObj) return null
  const spacingKeys = Object.keys(spacingObj)
  return (
    <div className="flex flex-col gap-4">
      <p>Spacings</p>

      <div className="grid grid-cols-6 gap-4">
        <p>Name</p>
        <p>Values (Rem)</p>
        <p>In px</p>
        <p>Visual</p>
        <div />
        <div />
        {spacingKeys.map(i => {
          const vals = getValues(parseInt(i))
          return (
            <>
              <p>{vals.name}</p>
              <p>{vals.spacing} rem</p>
              <p>{vals.pixels} px</p>
              <div className="relative col-span-3 flex">
                <div
                  className="h-10 bg-red-300 "
                  style={{
                    paddingRight: vals.pixels,
                  }}
                ></div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )

  function getValues(spacingN: number) {
    return {
      name: spacingN,
      spacing: spacingN / 4,
      pixels: spacingN * 4,
    }
  }
}

export default Page
