import React, { Component } from 'react'
import Link from './../components/Link'
import db from './../db'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = db
  }

  render() {
    return (
      <div className="Founds">
        <div className="Container Container_light">
          {this.state.founds.map((found, i) => (
            <Link key={i} className="Link Link_light Link_single Founds__Link" to={ '/founds/' + found.url }>
              <span className="Head Founds__head">{ found.name }</span>
              <span className="Text Founds__total nobr">{ found.total } ₽ собрано</span>
            </Link>
          ))}
          <button className="Button Button_black">Показать ещё</button>
        </div>
      </div>
    )
  }
}
