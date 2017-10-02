import React, { Component } from 'react'
// import decouple from 'decouple'
// import classNames from 'classnames'
import Close from './../components/Icons/Close'

export default class extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isHidden: false,
      closer: {
        posX: 0,
        posY: 0
      }
    }

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleMouseMove (e) {
    const $closer = this.closer
    this.setState({
      closer: {
        posX: e.clientX - $closer.offsetWidth / 2, 
        posY: e.clientY - $closer.offsetHeight / 2
      }
    })
  }

  handleClick (e) {
    const $self = e.target

    $self.style.maxHeight = $self.offsetHeight + 'px'
    
    setTimeout(() => {
      $self.classList.add('is-hidden')
    }, 10)
  }

  render() {
    const { posX, posY } = this.state.closer
    // const { isHidden } = this.state

    const closerStyle = {
      'WebkitTransform': `translate3d(${posX}px, ${posY}px, 0)`,
      'msTransform': `translate3d(${posX}px, ${posY}px, 0)`,
      'transform': `translate3d(${posX}px, ${posY}px, 0)`
    }

    return (
      <div className="Hero">
        <div className="Hero__header">
          <span className="Hero__total">12 000 000 ₽</span>
          <span className="SubHead Hero__total-caption">на благо&shy;тво&shy;рительность</span>
        </div>
        <div className="Hero__caption-wrap" onMouseMove={ this.handleMouseMove } onClick={ this.handleClick }>
          <p className="SubHead Hero__caption">Благотворительный аукцион встреч, 
          вырученные средства от которого напра&shy;вляются на благо&shy;творительность. Вы делаете ставки, 
          если&nbsp;побеждаете — встреча&nbsp;ваша</p>
        </div>
        <div className="Hero__closer" style={ closerStyle } ref={el => {this.closer = el}}><Close /></div>
      </div>
    )
  }
}