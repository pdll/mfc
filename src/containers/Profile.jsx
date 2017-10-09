import React, { Component } from 'react'
import classNames from 'classnames'

import Person from './../components/Person'
import Report from './../components/Report'
import Edit from './../components/EditProfile'
import isMobile from './../helpers/isMobile'
import db from './../db'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = db

    this.handleScroll = this.handleScroll.bind(this)
    this.calcPoint = this.calcPoint.bind(this)
    this.handleImagesLoad = this.handleImagesLoad.bind(this)
    this.toggleReport = this.toggleReport.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  componentWillMount () {
     this.setState({
      isAbsolute: false,
      point: 0,
      isReportActive: false,
      isEditActive: false
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

  toggleReport() {
    this.setState(prevState => ({
      isReportActive: !prevState.isReportActive
    }), () => {
      this.state.isReportActive ? global.freezeBody() : global.unfreezeBody()
    })
  }

  toggleEdit() {
    this.setState(prevState => ({
      isEditActive: !prevState.isEditActive
    }), () => {
      this.state.isEditActive ? global.freezeBody() : global.unfreezeBody()
    }) 
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
    const refReport = {
      toggle: this.toggleReport,
      state: this.state.isReportActive
    }

    const refEdit = {
      toggle: this.toggleEdit,
      state: this.state.isEditActive
    }

    return (
      <div className="Container Container_top-negative" ref={el => this.container = el }>
        <div className={classNames('Sidebar', 'Sidebar_profile', {
          'Sidebar_absolute': this.state.isAbsolute && !isMobile()
        })} style={{
          top: (this.state.isAbsolute && !isMobile()) ? this.state.point - ((global.innerWidth / 1366) * 100) : null
        }}>
          <h1 className="Head Sidebar__head">Вы пожертвовали <nobr>33 700 000 ₽</nobr></h1>
          <div className="Sidebar__footer Text">
            <div className="Sidebar__getlinks">
              <button className="Link Link_light" onClick={this.toggleEdit}>Редактировать профиль</button>
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
            <button className="Button Button_black" onClick={this.toggleReport}>Добавить отчет</button>
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
        <Report refReport={refReport}/>
        <Edit refEdit={refEdit}/>
      </div>
    )
  }
}