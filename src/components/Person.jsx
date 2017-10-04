import React from 'react'
import classNames from 'classnames'
import Link from './Link'

export default ({ name, timer, photo, price, url, isSpecial, isSingle, handleLoad, isComplete, isUp, isDown }) => (
  <span>
    {isComplete ?
      (
      <div className={classNames('Lot', {
        'Lot_special': isSpecial,
        'Lot_single': isSingle,
        'Lot_complete': isComplete
        })}>
        <div className="Text Lot__inner">
          <button type="button" className="Lot__button">Расскажите<br/>о встрече</button>
          <img className="Lot__img" src={photo} alt={name} onLoad={handleLoad}/>
          <span className="SubHead Lot__name">{name}</span>
          <div className="Lot__gradient"></div>
        </div>
      </div>
      ) : (
      <Link className={classNames('Lot', {
        'Lot_special': isSpecial,
        'Lot_single': isSingle
      })} to={`${url}`}>
        <div className="Text Lot__inner">
          <img className="Lot__img" src={photo} alt={name} onLoad={handleLoad}/>
          {(!isDown && !isUp) && <span className="Lot__time">{timer}</span>}
          {isDown && <span className="Lot__meta">Вашу ставку перебили</span>}
          {isUp && <span className="Lot__meta">Ваша ставка лидирует</span>}
          <span className="SubHead Lot__name">{name}</span>
          <span className="Lot__price">{price} ₽</span>
          <div className="Lot__gradient"></div>
        </div>
      </Link>
      )
    }
  </span>
)