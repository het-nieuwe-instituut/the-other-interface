const calculateImagePropotions = (
    originalImageWidth: number,
    originaImagelHeight: number,
    adjustToHeight: number,
    maxWidth: number
) => {
    let caulculatedWidth = (adjustToHeight * originalImageWidth) / originaImagelHeight
    let calculatedHeight = adjustToHeight
    if (caulculatedWidth >= maxWidth) {
        calculatedHeight = (maxWidth * originaImagelHeight) / originalImageWidth
        caulculatedWidth = (calculatedHeight * originalImageWidth) / originaImagelHeight
    }

    return {
        width: caulculatedWidth,
        height: calculatedHeight,
    }
}

export { calculateImagePropotions }
