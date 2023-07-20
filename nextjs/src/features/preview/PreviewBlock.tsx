import Router from 'next/router'

export const PreviewBlock = () => {
  // using style prop here because chakra / emotionCSS providers are not available here

  return (
    <div
      style={{
        position: 'absolute',
        border: '1px solid blue',
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
        paddingBottom: 20,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 11000,
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
        <p>&#x26A0;</p>
      </div>
      <div>
        <p>You are currently viewing in Preview Mode. </p>
        <button
          tabIndex={0}
          onClick={() => exitPreviewMode()}
          onKeyDown={() => exitPreviewMode()}
          onMouseEnter={e => (e.currentTarget.style.color = 'blue ')}
          onMouseLeave={e => (e.currentTarget.style.color = 'black')}
        >
          Turn Off Preview Mode
        </button>
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
