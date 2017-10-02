import React from 'react'
import classNames from 'classnames'
import CloseButton from './CloseButton'

export default ({isOpen, handleMenuClose, onOpenSigin}) => (
  <div className={classNames('Menu', { 'Menu_show': isOpen })}>
    <div className="Menu__body">
      <CloseButton className="Menu__close"
        onClick={handleMenuClose} />
      <a href="/persons" onClick={handleMenuClose} className="Menu__link Link Head Link_single Link_orange">Аукционы</a>
      <a href="/founds" onClick={handleMenuClose} className="Menu__link Link Head Link_single Link_orange">Фонды</a>
      <a href="/members"  onClick={handleMenuClose}className="Menu__link Link Head Link_single Link_orange">Участники</a>
      <a href="/news" onClick={handleMenuClose} className="Menu__link Link Head Link_single Link_orange">Новости</a>
      <a href="/contacts" onClick={handleMenuClose} className="Menu__link Link Head Link_single Link_orange">Контакты</a>
      <button onClick={onOpenSigin} className="Menu__enter Menu__link Link Head Link_single Link_orange" type="button">Вход</button>
    </div>
  </div>
)