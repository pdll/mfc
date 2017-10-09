import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import classes from 'classnames'

import isMobile from './../helpers/isMobile'
import db from './../db'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = db

    this.handleScroll = this.handleScroll.bind(this)
    this.calcPoint = this.calcPoint.bind(this)
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
    global.addEventListener('load', this.calcPoint)
    this.calcPoint()
  }

  componentWillUnmount () {
    global.removeEventListener('scroll', this.handleScroll)
    global.removeEventListener('resize', this.calcPoint)
    global.removeEventListener('load', this.calcPoint)
  }

  calcPoint () {
    this.setState({ point: (this.container.offsetTop + this.container.offsetHeight - global.innerHeight) + ((global.innerWidth / 1366) * 70) })
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
      <div className="Container About" ref={el => this.container = el } >
        <div className={classes('Sidebar', {
          'Sidebar_absolute': this.state.isAbsolute && !isMobile()
        })} style={{
          top: (this.state.isAbsolute && !isMobile()) ? this.state.point - ((global.innerWidth / 1366) * 150) : null
        }}>
          <h1 className="Sidebar__head Head">О нас</h1>
          <div className="About__list">
            <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4']}
              currentClassName="About__item_current"
              componentTag="div">
              <div className="About__item">Q: Что такое Meet For Charity?</div>
              <div className="About__item">Q: Отличная идея. И как это работает?</div>
              <div className="About__item">Q: И при чем здесь благотворительность?</div>
              <div className="About__item">Q: Окей, как я могу помочь?</div>
            </Scrollspy>
          </div>
        </div>
        <div className="Main">
          <p className="Main__title SubHead About__caption" id="section-1">A: Meet For Charity — благотворительный аукцион встреч, который помогает фондам привлекать средства для тех, кто в этом нуждается.</p>
          <p className="Main__title SubHead About__caption" id="section-2">A: Ежедневно мы разыгрываем встречи с интересными, креативными и успешными людьми, за возможность знакомства (за обед) с которыми вы можете побороться, принимая участие в аукционах. Каждый аукцион длится 5 рабочих дней. В случае победы в течение 3 суток вам необходимо оплатить ваш лот, а после…</p>
          <p className="Main__title SubHead About__caption" id="section-3">A: Средства, вырученные от аукционов, направляются в благотворительные фонды. Организатор удерживает 15% с каждой транзакции…</p>
          <div className="" id="section-4">
            <p className="Main__title SubHead About__caption About__caption_last">A: Это просто, как 1 2 3</p>
            <div className="About__step-list">
              <div className="About__step">
                <p className="Text">Вы делаете ставки в интересующем вас аукционе. мы...</p>
              </div>
              <div className="About__step">
                <p className="Text">В случае победы вы делаете пожертвование в фонд. мы искренне ценим это.</p>
              </div>
              <div className="About__step">
                <p className="Text">Вы идете на встречу с участником аукциона. вместе мы делаем мир лучше!</p>
              </div>
            </div>
            <p className="Main__title SubHead About__caption">Мы с уверенностью можем сказать - каждая встреча имеет значение. Meet For Charity привлек на благотворительность порядка 22 миллионов рублей для тех, кто действительно в этом нуждается. И вы можете увеличить эту цифру одной лишь ставкой!</p>
          </div>
        </div>
      </div>
    )
  }
}