import { useState } from 'react'

export const useClientPagination = <T extends Array<T[number]>>({
  items,
  itemsInPage: itemsInPage,
}: {
  items: T
  itemsInPage: number
}) => {
  const lastPage = Math.ceil(items.length / itemsInPage) || 1
  const limitedData = items.slice(0, itemsInPage)
  const [page, setPage] = useState(1)
  const [nodes, setNodes] = useState(limitedData)

  const next = () => {
    const newPage = page + 1
    if (newPage > lastPage) {
      return
    }
    const newNodes = items.slice((newPage - 1) * itemsInPage, newPage * itemsInPage)
    setPage(newPage)
    setNodes(newNodes)
  }

  const previous = () => {
    const newPage = page - 1
    if (newPage < 1) {
      return
    }
    const newNodes = items.slice((newPage - 1) * itemsInPage, newPage * itemsInPage)
    setPage(newPage)
    setNodes(newNodes)
  }

  return {
    next,
    previous,
    page,
    lastPage,
    nodes,
  }
}
