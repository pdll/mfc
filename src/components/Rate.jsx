import React, { Component } from 'react'
import classNames from 'classnames'

import Form from './../components/Form'
import Facebook from './../components/Icons/Facebook'
import Twitter from './../components/Icons/Twitter'
import Vkontakte from './../components/Icons/Vkontakte'
import Odnoklassniki from './../components/Icons/Odnoklassniki'

import CloseButton from './../components/CloseButton'
import Checkbox from './../components/Checkbox'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = {
      isUser: true
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    
  }

  render() {
    return (
      <div className={classNames("Rate", {"Rate_active": this.props.refRateWindow.isOpen})}>
        <CloseButton
          className="Search__close-button"
          onClick={this.props.refRateWindow.toggle}/>
        <div className="Signin__body">
          <h1 className="Signin__title Head">Сделать ставку</h1>
          {!this.state.isUser && <span className="Signin__undertitle Text">Сначала войдите в свой аккаунт</span>}
          {this.state.isUser ? (
              <div>
                <div className="Rate__form">
                  <Form placeholder="Ставка ₽" onSubmit={this.handleSubmit}/>
                </div>
                <div className="Rate__control-body Text">
                  <div className="Rate__control"><Checkbox isLight/></div>
                  <span className="Rate__control-label">Сделать ставку анонимно</span>
                </div>
                <div className="Rate__control-body Text">
                  <div className="Rate__control"><Checkbox isLight/></div>
                  <span className="Rate__control-label">Отслеживать ставку</span>
                </div>
              </div>
            ) : (
              <div>
                <Form placeholder="Телефон или почта" onSubmit={this.handleSubmit}/>
                <div className="Signin__social Text">
                  <span className="Text Signin__social__label">Или с помощью соцсетей:</span>
                  <button type="button" className="Signin__social__button"><Facebook /></button>
                  <button type="button" className="Signin__social__button"><Vkontakte /></button>
                  <button type="button" className="Signin__social__button"><Twitter /></button>
                  <button type="button" className="Signin__social__button"><Odnoklassniki /></button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}