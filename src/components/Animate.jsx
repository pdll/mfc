import React, {Component} from 'react'
import decouple from 'decouple'

class Animate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userClass: this.props.className,
      visibleClass: this.props.visibleClass,
      hiddenClass: this.props.hiddenClass,
      isVisible: false
    }

    this.handleScroll = null
  }


  componentDidMount () {
    let self = this
    let offset = self.node.offsetTop

    function animate (e) {
      let {isVisible} = self.state
      let middleOfView = window.scrollY + (window.innerHeight / 2)

      if (!isVisible && offset < middleOfView ) {
        self.setState({ isVisible: true })
        window.removeEventListener('scroll', this.handleScroll)
      }
    }

    this.handleScroll = decouple(window, 'scroll', animate)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    let { visibleClass, hiddenClass, isVisible, userClass} = this.state
    let visible = userClass + ' ' + visibleClass
    let hidden = userClass + ' ' + hiddenClass

     return (
       <div ref={(node) => {this.node = node}} className={ isVisible ? visible : hidden}>
         {this.props.children}
       </div>
     )
  }
}

export default Animate