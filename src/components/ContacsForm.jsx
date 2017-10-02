import React, { Component } from 'react'
import classNames from 'classnames'

import Form from './../components/Form'
import Select from './../components/Select'
import CloseButton from './../components/CloseButton'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      contact: null,
      theme: null,
      msg: null,
      isSubmit: false
    }

    this.onSubmitName = this.onSubmitName.bind(this)
    this.onSubmitContact = this.onSubmitContact.bind(this)
    this.onSubmitTheme = this.onSubmitTheme.bind(this)
    this.onSubmitMsg = this.onSubmitMsg.bind(this)
  }

  onSubmitName(data) {
    this.setState({
      name: data
    })
  }

  onSubmitContact(data) {
    this.setState({
      contact: data
    })
  }

  onSubmitTheme(data) {
    this.setState({
      theme: data
    })
  }

  onSubmitMsg(data) {
    this.setState({
      msg: data
    })
  }

  render() {

    return (
      <div className={classNames('Contacts-form', {'Contacts-form_active': this.props.isActive})}>

        <CloseButton
          className="Contacts-form__close-button"
          onClick={ this.props.onCloseForm } />

        <div className="Contacts-form__body">
          { this.state.isSubmit ?
            (
            <div className="">Text</div>
            ) : (
            <div>
              <h1 className="Contacts-form__title Head">Написать сообщение</h1>
              
              { this.state.name
                && <span className="Contacts-form__underhead Text">{this.state.name} {this.state.contact} {this.state.theme}</span>
              }
              
              {!this.state.name && <Form placeholder="Имя" onSubmit={this.onSubmitName} />}
              {this.state.name && !this.state.contact && <Form placeholder="Почта или телефон" onSubmit={this.onSubmitContact} />}
              {this.state.contact && !this.state.theme && <Select onSubmit={this.onSubmitTheme} />}
              {this.state.theme && !this.state.msg && <Form placeholder="Сообщение" onSubmit={this.onSubmitMsg} />}
            </div>
            )
          }
        </div>
      </div>     
    )
  }
}