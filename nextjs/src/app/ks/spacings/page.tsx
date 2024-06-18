import type { NextPage } from 'next'
import tailwind from './../../../../tailwind.config'

const Page: NextPage = () => {
  const spacingObj = tailwind.theme?.extend?.spacing
  if (!spacingObj) return null
  const spacingKeys = Object.keys(spacingObj)
  console.log(spacingKeys)
  return (
    <div className="flex flex-col gap-4">
      <p>Spacings</p>

      <div className="grid grid-cols-7 gap-4">
        <p>Name</p>
        <p>Values (Rem)</p>
        <p>In px</p>
        <p>Tw example</p>
        <p>Visual</p>
        <div />
        <div />
        {spacingKeys.map(i => {
          const vals = getValues(i)
          return (
            <>
              <p>{vals.name}</p>
              <p>{vals.spacing} rem</p>
              <p>{vals.pixels} px</p>
              <p>pr-{vals.name}</p>
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

  function getValues(spacingN: string) {
    //
    const stringIsNumber = (value: string) => isNaN(Number(value)) === false
    if (stringIsNumber(spacingN)) {
      return {
        name: spacingN,
        spacing: Number(spacingN) / 4,
        pixels: Number(spacingN) * 4,
      }
    }
    return {
      name: spacingN,
      spacing: spacingN,
      pixels: spacingN,
    }
  }
}

export default Page
