import React, { Component } from 'react'
import classNames from 'classnames'

import Form from './../components/Form'
import CloseButton from './../components/CloseButton'
import Result from './../components/ResultList'

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = {
      isSearching: false,
      searchValue: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    if (e.target.value !== '') {
      this.setState({
        isSearching: true
      })
    } else {
      this.setState({
        isSearching: false
      })
    }
  }

  handleInput (e) {
    this.setState({
      searchValue: e.target.value
    })

    if (e.target.value === '') {
      this.setState({
        isSearching: false
      })
    }
  }

  handleClose () {
    this.props.onCloseSearch()

    setTimeout(() => {
      this.setState({
        isSearching: false,
        searchValue: ''
      })
    }, 400)
  }

  render() {
    const { activeOverlay } = this.props
    const { isSearching, searchValue } = this.state

    const classes = classNames({
      'Search': true,
      'Search_active': activeOverlay
    })
    
    return (
      <div className={ classes }>

        <CloseButton
          className="Search__close-button"
          onClick={ this.handleClose } />

        <div className="Search__body">
          <div>
            <Form
              class="Head"
              placeholder="Поиск"
              onSubmit={ this.handleSubmit }
              onInput={ this.handleInput }
              value={ searchValue } />
          </div>
          { isSearching && <Result /> }
        </div>
      </div>
    )
  }
}