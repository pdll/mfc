import React, { Component } from 'react'

import db from './../db'

import Hero from './../components/Hero'
import Person from './../components/Person'
import Link from './../components/Link'

export default class Home extends Component {

  constructor(props) {
    super(props)
    
    this.state = db
  }

  render () {
    let { news, persons } = this.state
    
    let LotsSpecial = persons.map((item, i) => {
      if (i < 3) {
        return (
          <Person
            isSpecial
            key = {i}
            photo = {item.photo}
            name = {item.name}
            timer = {item.timer}
            price = {item.price}
            url = {`/persons/${item.url}`} />
        )
      }

      return null
    })

    let Lots = persons.map((item, i) => 
      <Person
        key = {i}
        photo = {item.photo}
        name = {item.name}
        timer = {item.timer}
        price = {item.price}
        url = {`/persons/${item.url}`} />
    )

    return (
      <div>
        <Hero />

        <div className="Home__section Home__persons">
          <div className="Home__persons-list Home__persons-list_special">{ LotsSpecial }</div>
          <div className="Home__persons-list">{ Lots }</div>
          <div className="Home__more">
            <Link to="/persons" className="Button Button_black">Посмотреть всё аукционы</Link>
          </div>
        </div>

        <div className="Home__section Home__news">
          <div className="Container">
            <div className="Home__news-grid">
              {news.map((article) => (
                <article key={ article.url } className="Home__news-item">
                  <Link to={ '/news/' + article.url } className="Link Home__news-link">
                    <span className="Text Home__news-date">{ article.date }</span>
                    <h1 className="SubHead Home__news-title">{ article.title }</h1>
                  </Link>
                </article>
                ))}
            </div>
            <div className="Home__more">
              <Link to="/news" className="Button Button_black">Посмотреть всё новости</Link>
            </div>
          </div>
        </div>

        <div className="Home__section Home__founds">
          <div className="Container">
            <p className="SubHead Home__founds-caption">Мы сотрудничаем с 30 фондами, среди них: <a href="" className="Link">Handmade Charity</a>, <a href="" className="Link">ОРБИ</a>, <a href="" className="Link">Хама</a>, <a href="" className="Link">Вера и Надежда</a>, <a href="" className="Link">Центр «Антон тут рядом»</a>, <a href="" className="Link">Благотворительный фонд Константина Хабенского</a></p>
            <Link to="/founds" className="Button Button_black">Посмотреть всё фонды</Link>
          </div>
        </div>

        <div className="Home__section Home__partners">
          <div className="Home__partners-scroll">
            <div className="Home__partners-list">
              <img className="Home__partners-item" src="/assets/img/partners_rb.png" />
              <img className="Home__partners-item" src="/assets/img/partners_gg.png" />
              <img className="Home__partners-item" src="/assets/img/partners_mail.png" />
              <img className="Home__partners-item" src="/assets/img/partners_meduza.png" />
              <img className="Home__partners-item" src="/assets/img/partners_ng.png" />
              <img className="Home__partners-item" src="/assets/img/partners_ya.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
