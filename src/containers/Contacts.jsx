import React from 'react'

export default () => (
  <div className="Contacts">
    <div className="Container Container_light">
      <h1 className="Head Contacts__title">Бауманская, 11, Москва, Россия</h1>
      <div className="Row Contacs__Row">
        <div className="Contacts__col">
          <div className="Contacts__row">
            <p className="Text">
              <a href="mailto:info@meetforcharity.today" className="Link Link_single">info@meetforcharity.today</a>
              <a href="tel:" className="Link Link_single">+7 925 271 88 82</a>
            </p>
          </div>
          <div className="Contacts__row">
            <p className="Text">
              Мы в <a href="" className="Link">Фейсбуке</a>, <a href="" className="Link">Вконтакте</a> и&nbsp;<a href="" className="Link">Инстаграме</a>
            </p>
          </div>
        </div>
        <div className="Contacts__col">
          <p className="Text Contacts__text">
            Если у вас есть вопросы о работе сайта, приложения, механике аукционов, лотах или любой другой вопрос, напишите нам:
          </p>
          <button className="Button Button_white">Написать</button>
        </div>
      </div>
    </div>
  </div>
)