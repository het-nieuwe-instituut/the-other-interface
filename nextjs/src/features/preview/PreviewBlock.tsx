import Router from 'next/router'
import { useState } from 'react'

export const PreviewBlock = () => {
  const [isHidden, setIsHidden] = useState(false)
  // using style prop here because chakra / emotionCSS providers are not available here

  if (isHidden) return null
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 11000,
        left: 0,
        right: 0,
      }}
    >
      <div
        style={{
          border: '1px solid blue',
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 8,
          paddingBottom: 8,
          top: 0,
          maxWidth: 300,

          background: 'white',
          display: 'flex',
          flexDirection: 'row',
          color: 'black',
        }}
      >
        <div
          style={{
            fontSize: 40,
            paddingRight: 16,
          }}
        >
          <p style={{ fontSize: 24 }}>&#x26A0;</p>
        </div>
        <div>
          <p style={{ marginBottom: 10 }}>You are currently in preview mode </p>
          <button
            style={{
              border: 1,
              borderStyle: 'solid',
              borderColor: 'black',
              paddingLeft: 8,
              paddingRight: 8,
            }}
            tabIndex={0}
            onClick={() => exitPreviewMode()}
            onKeyDown={() => exitPreviewMode()}
            onMouseEnter={e => (e.currentTarget.style.color = 'blue ')}
            onMouseLeave={e => (e.currentTarget.style.color = 'black')}
            title="Turns off preview mode and displays live content"
          >
            Turn Off
          </button>
          <button
            style={{
              border: 1,
              borderStyle: 'solid',
              borderColor: 'black',
              paddingLeft: 8,
              paddingRight: 8,
              marginLeft: 8,
            }}
            tabIndex={-1}
            onClick={() => setIsHidden(true)}
            onKeyDown={() => setIsHidden(true)}
            title="Hides this window and will not turn off preview mode"
          >
            hide
          </button>
        </div>
      </div>
    </div>
  )
}

async function exitPreviewMode() {
  const response = await fetch('/api/exit-preview')
  if (response) {
    Router.reload()
  }
}
