import { useEffect } from "react"
import useQuery from "../../hooks/useQuery"
import { getMenuPagesTask } from "./getMenuPagesTask"

export const usePresenter = (lang: string, isMenuOpen: boolean) => {
    const { data } = useQuery(() => getMenuPagesTask(lang))

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
        
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [isMenuOpen])
    
    return {
        menupages: data?.menupages
    }
}