import React, { Component } from 'react'
import db from './../db'
import Link from './../components/Link'
import Person from './../components/Person'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = db
  }

  render() {
    const { persons } = this.state

    let memebers = persons.map((item, i) => 
      <Person
        key = {i}
        photo = {item.photo}
        name = {item.name}
        timer = {item.timer}
        price = {item.price}
        url = {item.url} />
    )

    return (
      <div className="Members">
        <div className="Container">
          <h1 className="Head Members__header">
            <span className="Members__Link_active">Все категории</span>, <Link className="Link Members__Link" to="">бизнес</Link>, <Link className="Link Members__Link" to="">медиа</Link>, <Link className="Link Members__Link" to="">культура</Link>, <Link className="Link Members__Link" to="">мода</Link>, <Link className="Link Members__Link" to="">спорт</Link>, <Link className="Link Members__Link" to="">наука</Link>, <Link className="Link Members__Link" to="">политика</Link>, <Link className="Link Members__Link" to="">личности</Link>
          </h1>
          <section className="Members__section">
            <div className="Members__list">{ memebers }</div>
          </section>
          <div className="Members__more">
            <button className="Button Button_black">Посмотреть ещё</button>
          </div>
        </div>
      </div>
    )
  }
}
