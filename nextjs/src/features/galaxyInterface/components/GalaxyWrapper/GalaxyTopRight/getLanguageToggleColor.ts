export const getLanguageToggleColor = (isMenuOpen: boolean, isSelected: boolean) => {
    if (isMenuOpen) {
        return isSelected ? 'pinkAlpha.60' : 'pinkAlpha.100'
    } else {
        return isSelected ? 'blueAlpha.50' : 'blueAlpha.100'
    }
}