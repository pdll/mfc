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
import Member from './containers/Member'
import Person from './containers/Person'
import Founds from './containers/Founds'
import Found from './containers/Found'
import Partners from './containers/Partners'
import News from './containers/News'
import Article from './containers/Article'
import Profile from './containers/Profile'
import NotFound from './containers/404'

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
      container: null,
      isOverlap: false
    }

    this.handleCloseSigin = this.handleCloseSigin.bind(this)
    this.handleOpenSigin = this.handleOpenSigin.bind(this)
    this.handleCloseSearch = this.handleCloseSearch.bind(this)
    this.handleOpenSearch = this.handleOpenSearch.bind(this)
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)
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

    window.unfreezeBody()
  }

  handleOpenSigin () {
    this.setState({
      isSignin: true, 
      removeDelay: true
    })

    window.freezeBody()

  }

  handleCloseSearch () {
    this.setState({ isSearch: false })

    timeout(() => {
      this.setState({
        removeDelay: false
      })
    }, 400)

    window.unfreezeBody()
  }

  handleOpenSearch () {
    this.setState({
      isSearch: true, 
      removeDelay: true
    })

    window.freezeBody()
  }

  handleMenuClose () {
    this.setState({ isMenuOpen: false })

    timeout(() => {
      this.setState({
        removeDelay: false
      })
    }, 400)

    window.unfreezeBody()
  }

  handleMenuOpen () {
    this.setState({
      isMenuOpen: true,
      removeDelay: true
    })

    window.freezeBody()
  }

  componentDidMount() {
    const self = this

    // Routing
    // ------------------------------------------------------------------------
    page('*', (ctx, next) => {
      if (ctx.init) {
        next()
      } else {
        document.body.classList.add('is-animate')
        window.freezeBody(true)

        timeout(() => {
          window.scrollTo(0, 0)
        }, 300)

        timeout(() => {
          document.body.classList.remove('is-animate')
          window.unfreezeBody(true)
          next()
        }, 400)
      }
    })

    page('/404', () => {
      self.setState({
        container: <NotFound />,
        isIndex: false,
        isLight: true,
        isHalfLight: false
      })
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

    page('/members/:id', (ctx) => {
      self.setState({
        container: <Member id={ ctx.params.id } />,
        isIndex: false,
        isLight: false,
        isHalfLight: true
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

    page('/profile', (ctx) => {
      self.setState({
        container: <Profile />,
        isIndex: false,
        isLight: false,
        isHalfLight: true
      })
    })

    page()
    // ------------------------------------------------------------------------
    // End Routing

    function windowScrollHandler () {
      self.setState({ verticalScroll: window.scrollY })
    }

    window.freezeBody = function (isStatic) {
      if(!isStatic) self.setState({ isOverlap: true })
        
      document.body.classList.add('is-freeze')
    }

    window.unfreezeBody = function (isStatic) {
      if(!isStatic) self.setState({ isOverlap: false })

      timeout(() => {
        document.body.classList.remove('is-freeze')
      }, 400)
    }

    decouple(window, 'scroll', windowScrollHandler)
  }

  render() {
    const contentStyles = {
      'WebkitTransformOrigin': `center ${this.state.verticalScroll}px`,
      'msTransformOrigin': `center ${this.state.verticalScroll}px`,
      'transformOrigin': `center ${this.state.verticalScroll}px`,
      'WebkitTransitionDelay': this.state.removeDelay ? '0ms' : null,
      'msTransitionDelay': this.state.removeDelay ? '0ms' : null,
      'transitionDelay': this.state.removeDelay ? '0ms' : null
    }

    return (
      <div className={classNames("Wrap", {
        "_light": this.state.isLight,
        "_half-light": this.state.isHalfLight
      })}>  
        <Menu isOpen={this.state.isMenuOpen}
          handleMenuClose={this.handleMenuClose}
          onOpenSigin={ this.handleOpenSigin } />

        <Header
          isIndex={ this.state.isIndex }
          isDisable={ this.state.isOverlap }
          verticalScroll={ this.state.verticalScroll }
          handleMenuOpen={ this.handleMenuOpen }
          onOpenSearch={ this.handleOpenSearch }
          onOpenSigin={ this.handleOpenSigin } />

        <div className={classNames(
          "Background", {
          "Background_full": this.state.isLight,
          "Background_half": this.state.isHalfLight
        })} />

        <div className={classNames("Content", {
          "Content_disable": this.state.isSignin || this.state.isSearch || this.state.isMenuOpen
        })} style={contentStyles}>
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
