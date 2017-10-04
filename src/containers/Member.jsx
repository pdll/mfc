import React, { Component } from 'react'
import classNames from 'classnames'

import Checkbox from './../components/Checkbox'
import isMobile from './../helpers/isMobile'
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
    this.setState({ point: this.container.offsetTop + this.container.offsetHeight - window.innerHeight + ((window.innerWidth / 1366) * 30) })
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
      'Sidebar_absolute': this.state.isAbsolute && !isMobile()
    })

    const sidebarStyles = {
      top: this.state.isAbsolute && !isMobile() ? this.state.point : null
    }

    return (
      <div className="Container Container_top-negative" ref={el => this.container = el }>
        <div className={ sidebarClasses } style={ sidebarStyles }>
          <div className="Sidebar__bg">
            <img className="Sidebar__bg-img" src={this.state.persons[0].photo} alt={this.state.persons[0].name}/>
            <div className="Sidebar__bg-overlay"></div>
          </div>
          {!isMobile ? 
            <div className="Sidebar__share Sidebar__share_absolute Text">
              Поделиться:
              <a href="" className="Link Link_light Link_single">Фейсбук</a>
              <a href="" className="Link Link_light Link_single">Вконтакте</a> 
              <a href="" className="Link Link_light Link_single">Твиттер</a>
            </div>
          :
          <button type="button" className="Sidebar__share Sidebar__share_button Sidebar__share_absolute Text">
            Поделиться
          </button>
          }
          <h1 className="Head Sidebar__head">{this.state.persons[0].name}</h1>
          <div className="Sidebar__footer Text">
            <div className="Sidebar__getlinks">
              <a href="" className="Link Link_light">Получить ссылку на&nbsp;лот</a>
            </div>
            <div className="Sidebar__profile">
              <a href="" className="Link Link_light">Профиль Константина в Фейсбуке</a>
            </div>
          </div>
        </div>

        <div className="Main">
          <h1 className="Main__title SubHead">С участием Константина собрано 700 000 ₽</h1>
          <div className="Text Main__founds-list">
            <div className="Main__founds-item">
              <span className="Main__founds-price">1 150 000 ₽</span>
              <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Благотворительный фонд «Вера и Надежда»</a>, 3 мая</span>
            </div>
            <div className="Main__founds-item">
              <span className="Main__founds-price">12 600 000 ₽</span>
              <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Фонд Друзья</a>, 21 апреля</span>
            </div>
            <div className="Main__founds-item">
              <span className="Main__founds-price">1 150 000 ₽</span>
              <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Handmade Charity</a>, 3 мая</span>
            </div>
          </div>
          <div className="Main__founds-control Text">
            <div className="Main__control">
              <Checkbox />
            </div>
            <span className="Main__control-label">Уведомить о будущих аукционах</span>
          </div>
          <p className="Main__description Text">
            Креативный директор Leo Burnett Moscow, одного из крупнейших американских рекламных агентств мира. Михаил занимается рекламой более десяти лет, на его счету рекламные кампании для P&G, МТС, Сбербанк, Renault, McDonald’s, Wrigley
          </p>
          <section className="Main__auction">
            <h1 className="SubHead">Нет активных аукционов</h1>
          </section>
          {/*<section className="Main__auction">
            <h1 className="SubHead">Активный аукцион</h1>
            <div className="Main__lots-list Main__lots-list_no-pading">
                <Person
                  isSingle
                  handleLoad = {this.handleImagesLoad}
                  key = {this.state.persons[0]}
                  photo = {this.state.persons[0].photo}
                  name = {this.state.persons[0].name}
                  timer = {this.state.persons[0].timer}
                  price = {this.state.persons[0].price}
                  url = {this.state.persons[0].url} />
            </div>
          </section>*/}
        </div>
      </div>
    )
  }
}
