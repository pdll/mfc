import React from 'react'
import Textarea from 'react-autosize-textarea'

export default () => (
  <div className="Comments">
    <div className="Head Comments__title">Комментарии</div>
    <div className="Comments__list">
      <div className="Comments__item Text">
        <div className="Comments__row">
          <div className="Comments__col">
            <span className="Comments__name">Александр</span>
          </div>
          <div className="Comments__col">
            <p className="Comments__text">Хороший лот, даже сказать нечего, хотя комментарий стоит написать.</p>
            <span className="Comments__date">26 мая, 14:29</span>
          </div>
        </div>
      </div>
      <div className="Comments__item Text">
        <div className="Comments__row">
          <div className="Comments__col">
            <span className="Comments__name">Константин</span>
          </div>
          <div className="Comments__col">
            <p className="Comments__text">Всё круто, думаю.</p>
            <span className="Comments__date">26 мая, 19:01</span>
          </div>
        </div>
      </div>
      <div className="Comments__item Text">
        <div className="Comments__row">
          <div className="Comments__col">
            <span className="Comments__name">Станислав</span>
          </div>
          <div className="Comments__col">
            <p className="Comments__text">Странно выглядят комментарии, правда, но ладно.</p>
            <span className="Comments__date">26 мая, 19:01</span>
          </div>
        </div>
      </div>
    </div>
    <form action="" className="Comments__form Text">
      <Textarea className="Comments__field" placeholder="Написать комментарий"/>
    </form>
  </div>
)