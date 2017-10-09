import React, { Component } from 'react'
import classes from 'classnames'

import Form from './../components/Form'
import CloseButton from './../components/CloseButton'

export default class extends Component {
  render() {
    return (
      <div className={classes('modal', {'modal_active': this.props.refEdit.state})}>

        <CloseButton
          className="modal__close-button"
          onClick={ this.props.refEdit.toggle } />

        <div className="modal__body">
          <div className="modal__field">
            <Form placeholder="Имя"/>
          </div>
          <div className="modal__field">
            <Form placeholder="Номер"/>
          </div>
          <div className="modal__field">
            <Form placeholder="Почта"/>
          </div>
          <div className="modal__field">
            <Form placeholder="Сменить пароль"/>
          </div>
        </div>
      </div>     
    )
  }
}