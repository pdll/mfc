import React, { Component } from 'react'
import classNames from 'classnames'

export default class extends Component {
  constructor(props) {
    super(props)  

    this.state = {
      isLight: this.props.isLight,
      isChecked: false
    } 

    this.checkedHandle = this.checkedHandle.bind(this)
  }

  checkedHandle (e) {
    this.setState({
      isChecked: e.target.checked
    })
  }

  render() {
    return (
      <div className={classNames('Checkbox', {
        'Checkbox_light': this.state.isLight,
        'Checkbox_checked': this.state.isChecked,
      })}>
        <label className="Checkbox__label">
          <input type="checkbox" className="Checkbox__field" onChange={this.checkedHandle} />
          <span className="Checkbox__control"></span>
        </label>
      </div>
    )
  }
}
