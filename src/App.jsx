import React, { Component } from 'react'

import page from 'page'
import classNames from 'classnames'
import decouple from 'decouple'

import timeout from './helpers/rAF'

// Styles
import './app.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/MobileMenu'

// Containers
import Home from './containers/Home'
import Contacts from './containers/Contacts'
import Signin from './containers/Signin'
import Search from './containers/Search'
import Persons from './containers/Persons'
import Members from './containers/Members'
import Person from './containers/Person'
import Founds from './containers/Founds'
import Found from './containers/Found'
import Partners from './containers/Partners'
import News from './containers/News'
import Article from './containers/Article'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      removeDelay: false,
      isIndex: true,
      isSignin: false,
      isSearch: false,
      isLight: false,
      isHalfLight: false,
      isMenuOpen: false,
      verticalScroll: 0,
      container: null
    }

    this.handleCloseSigin = this.handleCloseSigin.bind(this)
    this.handleOpenSigin = this.handleOpenSigin.bind(this)
    this.handleCloseSearch = this.handleCloseSearch.bind(this)
    this.handleOpenSearch = this.handleOpenSearch.bind(this)
    this.freezeBody = this.freezeBody.bind(this)
    this.unfreezeBody = this.unfreezeBody.bind(this)
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)
  }

  freezeBody () {
    document.body.classList.add('is-freeze')
  }

  unfreezeBody () {
    timeout(() => {
      document.body.classList.remove('is-freeze')
    }, 400)
  }

  handleCloseSigin () {
    this.setState({
      isSignin: false
    })

    timeout(() => {
      this.setState({
        removeDelay: false
      })
    }, 400)

    this.unfreezeBody()
  }

  handleOpenSigin () {
    this.setState({
      isSignin: true, 
      removeDelay: true
    })

    this.freezeBody()

  }

  handleCloseSearch () {
    this.setState({ isSearch: false })

    timeout(() => {
      this.setState({
        removeDelay: false
      })
    }, 400)

    this.unfreezeBody()
  }

  handleOpenSearch () {
    this.setState({
      isSearch: true, 
      removeDelay: true
    })

    this.freezeBody()
  }

  handleMenuClose () {
    this.setState({ isMenuOpen: false })

    timeout(() => {
      this.setState({
        removeDelay: false
      })
    }, 400)

    this.unfreezeBody()
  }

  handleMenuOpen () {
    this.setState({
      isMenuOpen: true,
      removeDelay: true
    })

    this.freezeBody()
  }

  componentDidMount() {
    const self = this
    const $body = document.body

    // Routing
    // ------------------------------------------------------------------------
    page('*', (ctx, next) => {
      if (ctx.init) {
        next()
      } else {
        $body.classList.add('is-animate')
        self.freezeBody()

        timeout(() => {
          window.scrollTo(0, 0)
        }, 300)

        timeout(() => {
          $body.classList.remove('is-animate')
          self.unfreezeBody()
          next()
        }, 400)
      }
    })
    page('/', (ctx) => {
      self.setState({
        container: <Home />,
        isIndex: true,
        isLight: false,
        isHalfLight: false
      })
    })
    page('/contacts', (ctx) => {
      self.setState({
        container: <Contacts />,
        isIndex: false,
        isLight: true,
        isHalfLight: false
      })
    })
    page('/persons', (ctx) => {
      self.setState({
        container: <Persons />,
        isIndex: false,
        isLight: false,
        isHalfLight: false
      })
    })
    page('/persons/:id', (ctx) => {
      self.setState({
        container: <Person id={ ctx.params.id } />,
        isIndex: false,
        isLight: false,
        isHalfLight: true
      })
    })
    page('/founds', (ctx) => {
      self.setState({
        container: <Founds />,
        isIndex: false,
        isLight: true,
        isHalfLight: false
      })
    })
    page('/founds/:id', (ctx) => {
      self.setState({
        container: <Found id={ ctx.params.id } />,
        isIndex: false,
        isLight: false,
        isHalfLight: true
      })
    })
    page('/members', (ctx) => {
      self.setState({
        container: <Members />,
        isIndex: false,
        isLight: true,
        isHalfLight: false
      })
    })
    page('/partners', (ctx) => {
      self.setState({
        container: <Partners />,
        isIndex: false,
        isLight: true,
        isHalfLight: false
      })
    })
    page('/news', (ctx) => {
      self.setState({
        container: <News />,
        isIndex: false,
        isLight: false,
        isHalfLight: false
      })
    })
    page('/news/:id', (ctx) => {
      self.setState({
        container: <Article />,
        isIndex: false,
        isLight: false,
        isHalfLight: false
      })
    })
    page()
    // ------------------------------------------------------------------------
    // End Routing

    function windowScrollHandler () {
      self.setState({ verticalScroll: window.scrollY })
    }

    decouple(window, 'scroll', windowScrollHandler)
  }

  render() {
    const wrapClasess = classNames({
      'Wrap': true,
      '_light': this.state.isLight,
      '_half-light': this.state.isHalfLight
    })

    const backgroundClasses = classNames({
      'Background': true,
      'Background_full': this.state.isLight,
      'Background_half': this.state.isHalfLight
    })

    const contentClasess = classNames({
      'Content': true,
      'Content_disable': this.state.isSignin || this.state.isSearch || this.state.isMenuOpen
    })

    const contentStyles = {
      'WebkitTransformOrigin': `center ${this.state.verticalScroll}px`,
      'msTransformOrigin': `center ${this.state.verticalScroll}px`,
      'transformOrigin': `center ${this.state.verticalScroll}px`,
      'WebkitTransitionDelay': this.state.removeDelay ? '0ms' : null,
      'msTransitionDelay': this.state.removeDelay ? '0ms' : null,
      'transitionDelay': this.state.removeDelay ? '0ms' : null
    }

    return (
      <div className={ wrapClasess }>
          
        <Menu isOpen={this.state.isMenuOpen}
          handleMenuClose={this.handleMenuClose}
          onOpenSigin={ this.handleOpenSigin } />

        <Header
          isIndex={ this.state.isIndex }
          isDisable={ this.state.isSignin || this.state.isSearch }
          verticalScroll={ this.state.verticalScroll }
          handleMenuOpen={ this.handleMenuOpen }
          onOpenSearch={ this.handleOpenSearch }
          onOpenSigin={ this.handleOpenSigin } />

        <div className={ backgroundClasses }></div>

        <div className={ contentClasess } style={contentStyles }>
          { this.state.container }
          <Footer />
        </div>

        <div className="Modals">
          <Search
            activeOverlay={ this.state.isSearch }
            onCloseSearch={ this.handleCloseSearch }/>
          
          <Signin
            activeOverlay={ this.state.isSignin }
            onCloseSigin={ this.handleCloseSigin }/>
        </div>

      </div>
    )
  }
}
