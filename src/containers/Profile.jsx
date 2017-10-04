import React, { Component } from 'react'
import classNames from 'classnames'

import Person from './../components/Person'
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
    return (
      <div className="Container Container_top-negative" ref={el => this.container = el }>
        <div className={classNames('Sidebar', 'Sidebar_profile', {
          'Sidebar_absolute': this.state.isAbsolute && !isMobile()
        })} style={{
          'top': (this.state.isAbsolute && !isMobile()) ? this.state.point : null
        }}>
          <h1 className="Head Sidebar__head Sidebar__head_top">Вы пожертвовали <nobr>33 700 000 ₽</nobr></h1>
          <div className="Sidebar__footer Text Sidebar__footer_profile">
            <div className="Sidebar__getlinks">
              <a href="" className="Link Link_light">Редактировать профиль</a>
            </div>
            <div className="Sidebar__profile">
              <a href="" className="Link Link_light">Стать лотом</a>
            </div>
          </div>
        </div>

        <div className="Main">
          <section className="Main__top">
            <div className="Main__lots-list Main__lots-list_complete">
              <Person
                isSingle
                isComplete
                handleLoad = {this.handleImagesLoad}
                photo = {this.state.persons[0].photo}
                name = {this.state.persons[0].name}
                timer = {this.state.persons[0].timer}
                price = {this.state.persons[0].price}
                url = {this.state.persons[0].url} />
            </div>
            <button className="Button Button_black">Добавить отчет</button>
          </section>
          <section className="Main__auction">
            <h1 className="SubHead">Активный аукционы</h1>
            <div className="Main__lots-list">
              <Person
                isSingle
                isDown
                handleLoad = {this.handleImagesLoad}
                photo = {this.state.persons[0].photo}
                name = {this.state.persons[0].name}
                timer = {this.state.persons[0].timer}
                price = {this.state.persons[0].price}
                url = {this.state.persons[0].url} />

              <Person
                isSingle
                isUp
                handleLoad = {this.handleImagesLoad}
                photo = {this.state.persons[1].photo}
                name = {this.state.persons[1].name}
                timer = {this.state.persons[1].timer}
                price = {this.state.persons[1].price}
                url = {this.state.persons[1].url} />

              <Person
                isSingle
                isUp
                handleLoad = {this.handleImagesLoad}
                photo = {this.state.persons[2].photo}
                name = {this.state.persons[2].name}
                timer = {this.state.persons[2].timer}
                price = {this.state.persons[2].price}
                url = {this.state.persons[2].url} />
            </div>
          </section>
          <div>
            <h1 className="SubHead">История ставок</h1>
            <div className="Text Main__founds-list Main__founds-list_top-gap">
              <div className="Main__founds-item">
                <span className="Main__founds-price">1 150 000 ₽</span>
                <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Борис Зарьков</a>, 3 мая</span>
              </div>
              <div className="Main__founds-item">
                <span className="Main__founds-price">12 600 000 ₽</span>
                <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Константин Хабенский</a>, 21 апреля</span>
              </div>
              <div className="Main__founds-item">
                <span className="Main__founds-price">1 150 000 ₽</span>
                <span className="Main__founds-name"><a href="/founds/any" className="Link Link_orange">Юлия Шахновская</a>, 3 мая</span>
              </div>
            </div>
            <button className="Button Button_black">Показать ещё</button>
          </div>
        </div>
      </div>
    )
  }
}