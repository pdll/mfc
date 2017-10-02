import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      select: null
    }
  }

  componentDidMount() {
    this.setState({
      height: window.innerHeight - (this.body.getBoundingClientRect().top + this.body.getBoundingClientRect().height)
    })
  }

  render() {
    console.log(this.body)
    return (
      <div className="Select">
        <div className="Select-body" ref={el => this.body = el}>
          <span className="Select-label">Тема сообщения</span>
        </div>
        <div className="Select-list" style={{"height": `${this.state.height}px`}}>
          <ul className="Select-scroll">
            <li className="Select-item">Работа сайта</li>
            <li className="Select-item">Механика сайта</li>
            <li className="Select-item">Связь с лотом</li>
            <li className="Select-item">Ошибка на сайте</li>
          </ul>
        </div>
      </div>
    )
  }
}