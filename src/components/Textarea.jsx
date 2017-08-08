

import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      height: 0
    }

    this.setHeight = this.setHeight.bind(this)
    this.setValue = this.setValue.bind(this)
  }

  componentDidMount () {
    this.setHeight()
  }

  setHeight () {
    this.setState({ height: this.ghost.clientHeight })
  }

  setValue (e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const ghostStyle = {
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      position: 'absolute',
      visibility: 'hidden',
      top: 0
    }

    return (
      <div style={{ position: 'relative' }}>
        <textarea
          {...this.props}
          ref={(el) => this.area = el}
          style={{ height: `${this.state.height}px` }}
          onChange={this.setValue}
          onKeyUp={this.setHeight}>
        </textarea>
        <div
          ref={(el) => this.ghost = el}
          style={ ghostStyle }>
          {this.state.value}
        </div>
      </div>
    )
  }
}

