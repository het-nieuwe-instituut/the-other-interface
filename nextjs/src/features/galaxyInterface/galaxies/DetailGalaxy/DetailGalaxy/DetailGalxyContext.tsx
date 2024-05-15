import { PropsWithChildren, createContext, useState } from 'react'

export type DetailGalaxyContextType = {
  isRecordHovered: boolean
  setIsRecordHovered: (hover: boolean) => void
}

export const DetailGalaxyContext = createContext<DetailGalaxyContextType>({
  isRecordHovered: false,
  setIsRecordHovered: () => undefined,
})

export const DetailGalaxyProvider = ({ children }: PropsWithChildren) => {
  const [isRecordHovered, setIsRecordHovered] = useState<boolean>(false)
  return (
    <DetailGalaxyContext.Provider
      value={{
        isRecordHovered: isRecordHovered,
        setIsRecordHovered: (hover: boolean) => setIsRecordHovered(hover),
      }}
    >
      {children}
    </DetailGalaxyContext.Provider>
  )
}
