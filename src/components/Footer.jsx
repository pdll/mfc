import React from 'react'
import Link from './../components/Link'

export default () => (
  <div className="Footer">
    <div className="Footer__body">
      <div className="Footer__col">
        MeetForCharity © 2017
        <br /><a href="" className="Footer__link">Оферта</a>
      </div>
      <div className="Footer__col">
        <Link to="/person" className="Footer__link Footer__link_spaced">Аукционы</Link>
        <Link to="/founds" className="Footer__link Footer__link_spaced">Фонды</Link>
        <a href="/members" className="Footer__link Footer__link_spaced">Участники</a>
        <a href="/news" className="Footer__link Footer__link_spaced">Новости</a>
        <a href="/contacts" className="Footer__link Footer__link_spaced">Контакты</a>
        <a href="/partners" className="Footer__link Footer__link_spaced">Партнёры</a>

        <div className="Footer__col Footer__col_md">
          Мы в <a href="https://www.facebook.com/meetforcharity/" className="Footer__link">Фейсбуке</a>, <a href="" className="Footer__link">Инстаграме</a> <span className="nobr">
            и <a href="" className="Footer__link">Твиттере</a></span>
        </div>
      </div>
      <div className="Footer__col Footer__col_lg Footer__col_sm">
        Мы в <a href="https://www.facebook.com/meetforcharity/" className="Footer__link">Фейсбуке</a>, <a href="" className="Footer__link">Инстаграме</a> <span className="nobr">
          и <a href="" className="Footer__link">Твиттере</a></span>
      </div>
      <div className="Footer__col">
        Design by <a href="http://whiterussianstudio.com/" className="Footer__link">White Russian Studio</a>
      </div>
    </div>
  </div>
)
