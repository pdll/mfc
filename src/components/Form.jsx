import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.onSubmit = this.onSubmit.bind(this)
    this.onInput = this.onInput.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    this.input.value && this.props.onSubmit(this.input.value)
  }

  onInput () {
    this.input.value && this.props.onInput(this.input.value)
  }

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input className="Form__field" ref={el => this.input = el} type="text" placeholder={this.props.placeholder} onInput={this.props.onInput} />
        <button type="submit" className="Form__submit">→</button>
      </form>
    )
  }
}
