import React from 'react'
import classNames from 'classnames'
import Link from './Link'

export default ({ name, timer, photo, price, url, isSpecial, isSingle, handleLoad }) => {
  const clasess = classNames({
    'Lot': true,
    'Lot_special': isSpecial,
    'Lot_single': isSingle
  })

  return (
    <Link className={ clasess } to={`${url}`}>
      <div className="Text Lot__inner">
        <img className="Lot__img" src={photo} alt={name} onLoad={handleLoad}/>
        <span className="Lot__time">{timer}</span>
        <span className="SubHead Lot__name">{name}</span>
        <span className="Lot__price">{price} ₽</span>
        <div className="Lot__gradient"></div>
      </div>
    </Link>
  )
}