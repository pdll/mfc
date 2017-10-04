import React from 'react'
import classNames from 'classnames'

import Logo from './Logo'
import Link from './Link'
import Search from './Icons/Search'

export default ({ isDisable, verticalScroll, onOpenSigin, onOpenSearch, isIndex, handleMenuOpen }) => {
  const header = classNames({
    'Header': true,
    'Header_disable': isDisable,
    'Header_scrolling': verticalScroll > 0
  })

  return (
    <div className={ header }>
      <div className="Header__bg"></div>
      <div className="Header__body">
        <button className="Burger" type="button" onClick={ handleMenuOpen }>
          <span className="Burger__line"></span>
          <span className="Burger__line"></span>
          <span className="Burger__line"></span>
        </button>
        <div className="Header__menu">
          <Link to="/persons" className="Header__menu-link">Аукционы</Link>
          <Link to="/founds" className="Header__menu-link">Фонды</Link>
          <Link to="/members" className="Header__menu-link">Участники</Link>
          <Link to="/news" className="Header__menu-link">Новости</Link>
          <Link to="/contacts" className="Header__menu-link">Контакты</Link>
        </div>
        <div className="Header__logo">
          { 
            isIndex ? <span className="Header__logo-img"><Logo /></span>
            : <Link to="/" className="Header__logo-img"><Logo /></Link>
          }
        </div>
        <div className="Header__rightside">
          <a href="/profile" className="Header__loging-button">Павел Фролов</a>
          {/*<button className="Header__loging-button" onClick={ onOpenSigin }>Войти</button>*/}
          <button className="Header__search-button" onClick={ onOpenSearch }>
            <span className="Header__search-img"><Search /></span>
          </button>
        </div>
      </div>
    </div>
  )
}
