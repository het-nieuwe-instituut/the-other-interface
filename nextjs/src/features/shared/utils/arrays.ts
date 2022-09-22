export const splitArrayByChunks = <T>(inputArray: T[] | undefined | null, itemsPerChunk: number) => {
    if (inputArray) {
        return inputArray.reduce((resultArray: T[][], item, index) => { 
            const chunkIndex = Math.floor(index/itemsPerChunk)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
          }, [])
    }

    return []
    
}