import React from 'react'

export default (props) => {
  function openShareWindow () {
    const w = 550
    const h = 450
    const top = (window.innerHeight / 2) - (h / 2)
    const left = (window.innerWidth / 2) - (w / 2)

    window.open(
      props.href,
      '',
      `height=${h}, width=${w}, top=${top}, left=${left}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`
    )

  }

  function handleClick(e) {
    e.preventDefault()
    openShareWindow()
  }

  return (
    <a {...props} onClick={ handleClick }>{ props.children }</a>
  )
}