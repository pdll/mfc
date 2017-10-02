import React, { Component } from 'react'
import classNames from 'classnames'

import Person from './../components/Person'
import db from './../db'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = db

    this.handleScroll = this.handleScroll.bind(this)
    this.calcPoint = this.calcPoint.bind(this)
    this.handleImagesLoad = this.handleImagesLoad.bind(this)
  }

  componentWillMount () {
     this.setState({
      isAbsolute: false,
      point: 0
    })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.calcPoint)
    this.calcPoint()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calcPoint)
    this.calcPoint()
  }

  handleImagesLoad () {
    this.calcPoint()
  }

  calcPoint () {
    let point = this.container.offsetTop + this.container.offsetHeight - window.innerHeight
    this.setState({ point: point + ((window.innerWidth / 1366) * 30) })
  }

  handleScroll () {
    const { point } = this.state

    if (window.pageYOffset > point && !this.state.isAbsolute ) {
      this.setState({ isAbsolute: true })
    }

    if (window.pageYOffset < point && this.state.isAbsolute) {
      this.setState({ isAbsolute: false })
    }
  }

  render() {
    const sidebarClasses = classNames({
      'Sidebar': true,
      'Sidebar_absolute': this.state.isAbsolute
    })

    const sidebarStyles = {
      top: this.state.isAbsolute ? this.state.point : null
    }

    return (
      <div className="Container Container_top-negative" ref={el => this.container = el } >
        <div className={ sidebarClasses } style={ sidebarStyles }>
          <h1 className="Head">Благо&shy;твори&shy;тельный фонд Константина Хабенского</h1>
          <div className="Sidebar__footer Text">
            <div className="Sidebar__share">
              Поделиться:
              <a href="" className="Link Link_light Link_single">Фейсбук</a>
              <a href="" className="Link Link_light Link_single">Вконтакте</a> 
              <a href="" className="Link Link_light Link_single">Твиттер</a>
            </div> 
            <div className="Sidebar__logo">
              <div className="Sidebar__logo-img">
                <img src="/assets/img/found.png" alt=""/>
              </div>
              <a href="" className="Sidebar__logo-label Link Link_light">handmadecharity.ru</a>
            </div>           
          </div>
        </div>
        <div className="Main">
          <h1 className="Main__title SubHead">13 000 000 ₽ собрано в пользу фонда</h1>
          <button className="Button Button_black">Поддержать фонд</button>
          <p className="Main__description Text">Благотворительный фонд реализует программы духовно-нравственного воспитания и социальной адаптации детей, родителей из кризисных семей и людей с ограниченным возможностями</p>
          <section className="Main__lots">
            <h1 className="SubHead">Активные аукционы</h1>
            <div className="Main__lots-list">
              {this.state.persons.map((item, i) =>
                <Person
                  isSingle
                  handleLoad = {this.handleImagesLoad}
                  key = {i}
                  photo = {item.photo}
                  name = {item.name}
                  timer = {item.timer}
                  price = {item.price}
                  url = {item.url} />
                )}
            </div>
          </section>
          <section className="Main__members">
            <h1 className="Main__members-title SubHead">Участники, которые  уже&nbsp;поддержали фонд</h1>
            <div className="Main__members-list">
              <div className="Main__members-item Text">
                <span className="Main__members-price">1 150 000 ₽</span>
                <span className="Main__members-caption"><a href="" className="Link Link_orange">Борис Зарьков</a>, 26 мая</span>
              </div>
              <div className="Main__members-item Text">
                <span className="Main__members-price">12 600 000 ₽</span>
                <span className="Main__members-caption"><a href="" className="Link Link_orange">Константин Хабенский</a>, 3 мая</span>
              </div>
              <div className="Main__members-item Text">
                <span className="Main__members-price">720 000 ₽</span>
                <span className="Main__members-caption"><a href="" className="Link Link_orange">Юлия Шахновская</a>, 5 января</span>
              </div>
              <div className="Main__members-item Text">
                <span className="Main__members-price">33 230 000 ₽</span>
                <span className="Main__members-caption"><a href="" className="Link Link_orange">Сати Спивакова</a>, 3 сентября</span>
              </div>
              <div className="Main__members-item Text">
                <span className="Main__members-price">330 000 ₽</span>
                <span className="Main__members-caption"><a href="" className="Link Link_orange">Дмитрий Новиков</a>, 22 декабря</span>
              </div>
              <button className="Button Button_black Main__members-button">Показать ещё</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}