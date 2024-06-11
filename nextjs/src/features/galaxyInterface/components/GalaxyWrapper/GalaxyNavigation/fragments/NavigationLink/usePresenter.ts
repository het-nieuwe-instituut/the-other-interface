const getLineStyle = (isCurrentZoom: boolean, isClickable: boolean, isNextZoom: boolean) => {
  if (isCurrentZoom || isClickable) {
    return {
      backgroundColor: 'pinkAlpha.100',
    }
  }
  if (isNextZoom) {
    return {
      backgroundImage: 'linear-gradient(90deg, #FFE6DD 9.46%, rgba(255, 230, 221, 0.4) 93.12%)',
    }
  }
  return {
    backgroundColor: 'pinkAlpha.40',
  }
}

export const usePresenter = (zoom: number, currentZoomNumber: number) => {
  const isClickable = zoom < currentZoomNumber
  const isCurrentZoom = zoom === currentZoomNumber
  const isNextZoom = Math.abs(zoom - currentZoomNumber) === 1

  const lineStyle = getLineStyle(isCurrentZoom, isClickable, isNextZoom)

  return {
    isClickable,
    isCurrentZoom,
    isNextZoom,
    lineStyle,
  }
}
