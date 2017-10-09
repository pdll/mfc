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
    global.addEventListener('scroll', this.handleScroll)
    global.addEventListener('resize', this.calcPoint)
    this.calcPoint()
  }

  componentWillUnmount () {
    global.removeEventListener('scroll', this.handleScroll)
    global.removeEventListener('resize', this.calcPoint)
    this.calcPoint()
  }

  handleImagesLoad () {
    this.calcPoint()
  }

  calcPoint () {
    this.setState({ point: (this.container.offsetTop + this.container.offsetHeight - global.innerHeight) + ((global.innerWidth / 1366) * 30) })
  }

  handleScroll () {
    const { point } = this.state

    if (global.pageYOffset > point && !this.state.isAbsolute ) {
      this.setState({ isAbsolute: true })
    }

    if (global.pageYOffset < point && this.state.isAbsolute) {
      this.setState({ isAbsolute: false })
    }
  }

  render() {
    return (
      <div className="Container Container_top-negative" ref={el => this.container = el }>
        <div className={classNames('Sidebar', 'Sidebar_person', {
          'Sidebar_absolute': this.state.isAbsolute && !isMobile()
        })} style={{
          top: (this.state.isAbsolute && !isMobile()) ? this.state.point - ((global.innerWidth / 1366) * 100) : null
        }}>
          <div className="Sidebar__body">
            <div className="Sidebar__bg">
              <img className="Sidebar__bg-img" src="/assets/img/persons/01.png" alt=""/>
              <div className="Sidebar__bg-overlay"></div>
            </div>
            {!isMobile() ? 
              (<div className="Sidebar__share Sidebar__share_absolute Text">
                Поделиться:
                <a href="" className="Link Link_light Link_single">Фейсбук</a>
                <a href="" className="Link Link_light Link_single">Вконтакте</a> 
                <a href="" className="Link Link_light Link_single">Твиттер</a>
              </div>)
            : (<button type="button" className="Sidebar__share Sidebar__share_button Sidebar__share_absolute Text">
              Поделиться
            </button>)
            }
            <h1 className="Head Sidebar__head Sidebar__head_bottom">Юлия<br/>Шахновская</h1>
            <div className="Sidebar__footer Sidebar__footer_person Text">
              <div className="Sidebar__getlinks Sidebar__getlinks_person">
                <a href="" className="Link Link_light">Получить ссылку на страницу участника</a>
              </div>
              <div className="Sidebar__profile">
                <a href="" className="Link Link_light">Профиль Юлии в Фейсбуке</a>
              </div>
            </div>
          </div>
        </div>

        <div className="Main">
          <h1 className="Main__title SubHead">С участием Константина собрано <nobr>700 000 ₽</nobr></h1>
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
