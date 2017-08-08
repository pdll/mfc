import React, { Component } from 'react'
import classNames from 'classnames'
import timeout from './../helpers/rAF'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  componentDidMount () {
    timeout(() => {
      this.setState({
        isActive: true
      })
    }, 10)
  }

  componentWillUnmount () {
    this.setState({
      isActive: false
    })
  }

  render() {
    const classes = classNames({
      'Search__result': true,
      'Search__result_active': this.state.isActive
    })

    return (
      <div className={ classes }>
        <div className="Search__result-body">
          <div className="Search__result-item">
            <span className="Text Search__result-label">Участник</span>
            <span className="Head Search__result-title">Дмитрий Соловьёв</span>
          </div>
          <div className="Search__result-item">
            <span className="Text Search__result-label">Участник</span>
            <span className="Head Search__result-title">Дмитрий Петров</span>
          </div>
          <div className="Search__result-item">
            <span className="Text Search__result-label">Участник</span>
            <span className="Head Search__result-title">Дмитрий Петров</span>
          </div>
          <div className="Search__result-item">
            <span className="Text Search__result-label">Участник</span>
            <span className="Head Search__result-title">Дмитрий Петров</span>
          </div>
          <div className="Search__result-item">
            <span className="Text Search__result-label">Участник</span>
            <span className="Head Search__result-title">Дмитрий Петров</span>
          </div>
        </div>
      </div>
    )
  }
}