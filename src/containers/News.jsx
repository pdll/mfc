import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

export default class extends Component {
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: false
      }
    };

    return (
      <div className="Container Container_no-top">
        <Swiper {...params}>
          <a href="/news/slug" className="News__item">
            <span className="News__item-body">
              <img className="News__item-img" src="https://unsplash.it/1920/1080/?image=1076" alt=""/>
              <span className="News__item-bg"></span>
              <span className="News__item-caption">
                <span className="News__item-label Text">3 дня назад</span>
                <h1 className="Head News__item-title">Проекту исполнился год</h1>
              </span>
            </span>
          </a>
          <a href="/news/slug" className="News__item">
            <span className="News__item-body">
              <img className="News__item-img" src="https://unsplash.it/1920/1080/?image=1067" alt=""/>
              <span className="News__item-bg"></span>
              <span className="News__item-caption">
                <span className="News__item-label Text">3 дня назад</span>
                <h1 className="Head News__item-title">У нас появилось крутое место для ваших встреч</h1>
              </span>
            </span>
          </a>
          <a href="/news/slug" className="News__item">
            <span className="News__item-body">
              <img className="News__item-img" src="https://unsplash.it/1920/1080/?image=1068" alt=""/>
              <span className="News__item-bg"></span>
              <span className="News__item-caption">
                <span className="News__item-label Text">3 дня назад</span>
                <h1 className="Head News__item-title">Проекту исполнился год</h1>
              </span>
            </span>
          </a>
          <a href="/news/slug" className="News__item">
            <span className="News__item-body">
              <img className="News__item-img" src="https://unsplash.it/1920/1080/?image=1011" alt=""/>
              <span className="News__item-bg"></span>
              <span className="News__item-caption">
                <span className="News__item-label Text">3 дня назад</span>
                <h1 className="Head News__item-title">У нас появилось крутое место для ваших встреч</h1>
              </span>
            </span>
          </a>
          <a href="/news/slug" className="News__item">
            <span className="News__item-body">
              <img className="News__item-img" src="https://unsplash.it/1920/1080/?image=1001" alt=""/>
              <span className="News__item-bg"></span>
              <span className="News__item-caption">
                <span className="News__item-label Text">3 дня назад</span>
                <h1 className="Head News__item-title">Проекту исполнился год</h1>
              </span>
            </span>
          </a>
        </Swiper>
      </div>
    )
  }
}