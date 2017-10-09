import React, { Component } from 'react'
import classNames from 'classnames'
import Textarea from 'react-textarea-autosize';

import CloseButton from './../components/CloseButton'

export default class extends Component {
  render() {
    return (
      <div className={classNames('modal', {'modal_active': this.props.refReport.state})}>

        <CloseButton
          className="modal__close-button"
          onClick={ this.props.refReport.toggle } />

        <div className="modal__body">
          <h1 className="modal__head Head">Отчёт о встрече с Ксенией Казанцевой</h1>
          <span className="modal__caption Text">10 июля</span>

          <div className="modal__form">
            <div className="modal__textarea">
              <Textarea className="Textarea Text" minRows={1} placeholder="Ваши впечатления"/>
            </div>
            <button className="modal__submit Head">→</button>
          </div>

          <di className="modal__photos">
            <label className="Button Button_white modal__photos-label">
              <input className="modal__photos-field" name="" type="file" />
              Добавить фото
            </label>
          </di>
        </div>
      </div>     
    )
  }
}