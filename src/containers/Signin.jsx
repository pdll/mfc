import React from 'react'
import classNames from 'classnames'

import Form from './../components/Form'
import Facebook from './../components/Icons/Facebook'
import Twitter from './../components/Icons/Twitter'
import Vkontakte from './../components/Icons/Vkontakte'
import Odnoklassniki from './../components/Icons/Odnoklassniki'

import CloseButton from './../components/CloseButton'

export default ({ activeOverlay, onCloseSigin }) => {
  const classes = classNames({
    'Signin': true,
    'Signin_active': activeOverlay
  })

  return (
    <div className={ classes }>
      <CloseButton
        className="Signin__close-button"
        onClick={ onCloseSigin } />
      <div className="Signin__body">
        <h1 className="Signin__title Head">Вход</h1>
        <Form placeholder="Телефон или почта"/>
        <div className="Signin__social Text">
          <span className="Text Signin__social__label">Или с помощью соцсетей:</span>
          <button type="button" className="Signin__social__button"><Facebook /></button>
          <button type="button" className="Signin__social__button"><Vkontakte /></button>
          <button type="button" className="Signin__social__button"><Twitter /></button>
          <button type="button" className="Signin__social__button"><Odnoklassniki /></button>
        </div>
      </div>
    </div>
  )
}