'use client'
import { useEffect, useLayoutEffect, useState } from 'react'

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll' // forcing scrollbar to appear
  document.body.appendChild(outer)

  // Creating inner element and placing it in the container
  const inner = document.createElement('div')
  outer.appendChild(inner)

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer)

  return scrollbarWidth
}

function useBodyScrollable() {
  const [bodyScrollable, setBodyScrollable] = useState(
    document.body.scrollHeight > window.innerHeight
  )

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (document.body.style.overflow === 'hidden') {
        setBodyScrollable(false)
        return
      }
      setBodyScrollable(document.body.scrollHeight > window.innerHeight)
    })
    resizeObserver.observe(document.body)
    return () => {
      resizeObserver.unobserve(document.body)
    }
  }, [])

  return bodyScrollable
}

export default function ScrollbarSpacing() {
  const bodyScrollable = useBodyScrollable()

  useLayoutEffect(() => {
    const scrollbarWidth = getScrollbarWidth()
    const nav = document.getElementById('navigation-scrollbar')
    if (nav) {
      console.log(nav, scrollbarWidth)
      nav.style.paddingRight = `${scrollbarWidth}px`
    }
  }, [bodyScrollable])

  return null
}
