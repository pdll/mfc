import React, { Component } from 'react'
import classNames from 'classnames'

import Person from './../components/Person'
import Rate from './../components/Rate'
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
    this.handleToggleRateWindow = this.handleToggleRateWindow.bind(this)
  }

  componentWillMount () {
    this.setState({
      isAbsolute: false,
      point: 0,
      rateWindow: {
        isOpen: false
      }
    })
  }

  componentDidMount () {
    window.addEventListener('load', this.calcPoint)
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.calcPoint)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calcPoint)
  }

  handleToggleRateWindow () {
    this.setState(prevState => ({
      rateWindow: {
        isOpen: !prevState.rateWindow.isOpen
      }
    }))
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
    const sidebarStyles = {
      top: (this.state.isAbsolute && !isMobile()) ? this.state.point : null
    }

    const refRateWindow = {
      isOpen: this.state.rateWindow.isOpen,
      toggle: this.handleToggleRateWindow
    }

    return (
      <div className="Container Container_top-negative" ref={el => this.container = el }>
        <div className={classNames('Sidebar', {
          'Sidebar_absolute': this.state.isAbsolute && !isMobile()
        })} style={ sidebarStyles }>
          <div className="Sidebar__bg">
            <img className="Sidebar__bg-img" src="/assets/img/persons/01.png" alt=""/>
            <div className="Sidebar__bg-overlay"></div>
          </div>
          {!isMobile ? 
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
          <h1 className="Head Sidebar__head">Юлия<br/>Шахновская</h1>
          <div className="Sidebar__footer Text">
            <div className="Sidebar__getlinks">
              <a href="" className="Link Link_light">Получить ссылку на&nbsp;аукцион</a>
            </div>
            <div className="Sidebar__profile">
              <a href="" className="Link Link_light">Профиль Юлии в Фейсбуке</a>
            </div>
          </div>
        </div>

        <div className="Main">
          {/*
          // Если уже есть ставки показыввем этот блок
          <span className="Text">Всего 4 ставки</span>
          <h1 className="Main__title SubHead">Последняя ставка <nobr>800 000 ₽</nobr></h1>
          */}
          <h1 className="Main__title SubHead">Сделайте ставку первым</h1>
          <div className="Text Main__founds-list">
            {/*
            // Список ставок
            <div className="Main__founds-item">
              <span className="Main__founds-price">800 000 ₽</span>
              <span className="Main__founds-name">Дмитрий</span>
            </div>
            <div className="Main__founds-item Orange">
              <span className="Main__founds-price">700 000 ₽</span>
              <span className="Main__founds-name">Вы</span>
            </div>
            <div className="Main__founds-item">
              <span className="Main__founds-price">320 000 ₽</span>
              <span className="Main__founds-name">Евгений</span>
            </div>
            */}
            
            {/*
              Если уже есть ставки
              <button className="Main__founds-button Button Button_black" onClick={this.handleToggleRateWindow}>Поднять ставку</button>
            */}
            <button className="Main__founds-button Button Button_black" onClick={this.handleToggleRateWindow}>Сделать ставку</button>
          </div>
          <p className="Main__description Text">
            Креативный директор <a href="">Leo Burnett Moscow</a>, одного из крупнейших американских рекламных агентств мира. Михаил занимается рекламой более десяти лет, на его счету рекламные кампании для P&G, МТС, Сбербанк, Renault, McDonald’s, Wrigley
          </p>
          <div className="Main__founds-control Text">
            <div className="Main__control">
              <Checkbox />
            </div>
            <span className="Main__control-label">Cледить за аукционом</span>
          </div>
          <section className="Main__auction">
            <h1 className="SubHead">Вас могут заинтересовать</h1>
            <div className="Main__lots-list Main__lots-list_no-pading">
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
        </div>
        <Rate refRateWindow={refRateWindow}/>
      </div>
    )
  }
}
