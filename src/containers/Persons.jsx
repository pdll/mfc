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

    let completing = persons.map((item, i) => 
      i < 3 ? <Person
        key = {i}
        photo = {item.photo}
        name = {item.name}
        timer = {item.timer}
        price = {item.price}
        url = {item.url} />
      : null
    )

    let expensive = persons.map((item, i) => 
      (i > 3 && i < 7)  ? <Person
        key = {i}
        photo = {item.photo}
        name = {item.name}
        timer = {item.timer}
        price = {item.price}
        url = {item.url} />
      : null
    )

    let recent = persons.map((item, i) => 
      <Person
        key = {i}
        photo = {item.photo}
        name = {item.name}
        timer = {item.timer}
        price = {item.price}
        url = {item.url} />
    )

    return (
      <div className="Persons">
        <div className="Container">
          <h1 className="Head Persons__header">
            <span className="Persons__Link_active">Все категории</span>, <Link className="Link Persons__Link" to="">бизнес</Link>, <Link className="Link Persons__Link" to="">медиа</Link>, <Link className="Link Persons__Link" to="">культура</Link>, <Link className="Link Persons__Link" to="">мода</Link>, <Link className="Link Persons__Link" to="">спорт</Link>, <Link className="Link Persons__Link" to="">наука</Link>, <Link className="Link Persons__Link" to="">политика</Link>, <Link className="Link Persons__Link" to="">личности</Link>
          </h1>
          <section className="Persons__section">
            <h1 className="SubHead Persons__title">Скоро заканчиваются</h1>
            <div className="Persons__list">{ completing }</div>
          </section>
          <section className="Persons__section">
            <h1 className="SubHead Persons__title">Самые дорогие</h1>
            <div className="Persons__list">{ expensive }</div>
          </section>
          <section className="Persons__section">
            <h1 className="SubHead Persons__title">Недавно добавленные</h1>
            <div className="Persons__list">{ recent }</div>
          </section>
          <div className="Persons__more">
            <button className="Button Button_black">Посмотреть ещё</button>
          </div>
        </div>
      </div>
    )
  }
}
