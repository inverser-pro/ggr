import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import BaseSeo from "../components/BasicSeo"
import Container from '../components/Container'

const IndexPage = () => {
  return (
      <Container>
        <header className="ovh header">
          <div className="wrapper">
              <nav className="nav">
                  <ul className="nav__list">
                      <li className="nav__item">
                          <a className="nav__link" href="#">Главная</a>
                      </li>
                      <li className="nav__item">
                          <a className="nav__link" href="#">Оклейка автомобилей</a>
                      </li>
                      <li className="nav__item">
                          <a className="nav__link" href="#">Детейлинг автомобилей</a>
                      </li>
                      <li className="nav__item">
                          <a className="nav__link" href="#our-works">Галерея работ</a>
                      </li>
                  </ul>
                  <div className="rectangle">
                      <div className="rectangle__items"></div>
                      <div>
                          <div className="rectangle__items"></div>
                      </div>
                      <div className="rectangle__items"></div>
                  </div>
              </nav>
              <div className="header-info">
                  <h1 className="header-info__tittle">CAR MUSIC</h1>
                  <div className="hr-line">
                      <div className="hr-line__items"></div>
                      <div className="hr-line__items"></div>
                      <div className="hr-line__items"></div>
                      <div className="hr-line__items"></div>
                  </div>
                  <div className="header-info__description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</p>
                  </div>
                  <div className="header-info__btn">
                      <a className="header-info__link" href="#our-services">Наши услуги</a>
                  </div>
              </div>
          </div>
          <div className="header-bottom">
              <div className="header-bottom__items">
                  <div className="header-bottom__elements">
                      <div className="header-bottom__title">адрес:</div>
                      <div className="header-bottom__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                  </div>
              </div>
              <div className="header-bottom__items">
                  <div className="header-bottom__elements">
                      <div className="header-bottom__title">телефон:</div>
                      <div className="header-bottom__body"><a href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a></div>
                      <div className="header-bottom__body"><a href="tel:8-911-123-45-67">8-911-123-45-67</a></div>
                  </div>
              </div>
              <div className="header-bottom__items">
                  <div className="header-bottom__elements">
                      <div className="header-bottom__title">Режим работы:</div>
                      <div className="header-bottom__body">пн-пт : 10:00 - 20:00</div>
                      <div className="header-bottom__body">сб-вск : 12:00 - 20:00</div>
                  </div>
              </div>
          </div>
        </header>
        <main className="ovh main">
            <div className="wrapper">
                <div className="progress">
                    <div className="progress__left">
                        <h2 className="progress__title">Наши достижения от местного кубка до чемпионатов мира</h2>
                        <div className="hr-line">
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                        </div>
                        <div className="progress__descriptions">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Habitant
                          tincidunt aliquam tincidunt pretium sodales.
                          Tristique odio
                          pellentesque et tincidunt posuere arcu purus
                          lobortis risus. Urna,
                          ut amet odio orci magnis praesent ultrices.
                          Praesent malesuada lacus
                          tellus tristique sit at. Sed viverra nulla nam
                          arcu, non iaculis
                          pretium, volutpat.
                        </div>
                    </div>
                    <div className="progress-items">
                        <div className="progress__center">
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>1</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>6</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>2</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>1</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                        </div>
                        <div className="progress__right">
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>4</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>3</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><span>#</span>1</div>
                                <div className="progress-element__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Quisque
                                                                    dui
                                </div>
                            </div>
                            <div className="progress-element">
                                <div className="progress-element__title"><img src="img/ico/cup.png" alt="cup"/></div>
                                <div className="progress-element__body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Quisque dui
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider">
                
                <div className="wrapper">
                    <div className="slider-btns">
                        <div className="btn-left">
                            <div className="btn-left__arrow"></div>
                        </div>
                        <div className="btn-right">
                            <div className="btn-right__arrow"></div>
                        </div>
                    </div>
                    <div id="slides" className="slides">
                        <div className="slide" style={{backgroundImage: 'url(img/slider-img1.png)'}}>
                            <div className="slide__content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                          vulputate laoreet sapien a sit </p></div>
                        </div>
                        <div className="slide" style={{backgroundImage: 'url(img/slider-img2.png)'}}>
                            <div className="slide__content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                          vulputate laoreet sapien a sit </p></div>
                        </div>
                        <div className="slide" style={{backgroundImage: 'url(img/slider-img3.png)'}}>
                            <div className="slide__content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                          vulputate laoreet sapien a sit </p></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="wrapper">
                <div className="advantages">
                    <div className="advantages-aside">
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/check-list.png"
                                                                        alt="Материалы от лучших компаний"/></span>
                                <h2 className="advantages__items-title">Материалы от лучших компаний</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                  Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                                                                  suspendisse amet nisl vestibulum risus. Quis pretium</p>
                            </div>
                        </div>
                        <div className="hr-line">
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                        </div>
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/scales.png"
                                                                        alt="Опытные мастера"/></span>
                                <h2 className="advantages__items-title">Опытные мастера</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                                                                  donec
                                                                  elementum egestas vitae ullamcorper. Amet volutpat ornare
                                                                  pharetra amet adipiscing orci, lectus aenean ultricies. Erat
                                                                  viverra eget blandit ornare. Molestie ipsum commodo faucibus
                                                                  rhoncus</p>
                            </div>
                        </div>
                        <div className="hr-line">
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                        </div>
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/auto.png"
                                                                        alt="Гарантия на все виды работы"/></span>
                                <h2 className="advantages__items-title">Гарантия на все виды работы</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                  Vestibulum volutpat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="advantages-slider">
                        
                        <div className="advantages-slider__img-container">
                            <img className="advantages-slider__img" src="img/slider-sm1.png" alt="img-advantages"/>
                        </div>
                        
                        <div className="advantages-slider__content">
                            <div className="btn-left">
                                <div className="btn-left__arrow"></div>
                            </div>
                            <div className="advantages-slider__descriptions">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat
                                  est.
                                  Consectetur lectus.</p>
                            </div>
                            <div className="btn-right">
                                <div className="btn-right__arrow"></div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
            <div className="wrapper">
                <div className="services">
                    <h2 className="services__title" id="our-services">Наши услуги</h2>
                    <div className="hr-line">
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                    </div>
                    <div className="services__links">
                        <div className="services__link link-accent"><a href="#">Оклейка</a></div>
                        <div className="services__link"><a href="#">Детейлинг</a></div>
                    </div>
                    <div className="services__layouts">
                        <div className="services__layout">
                            <div className="services__layout-ico"><img src="img/ico/wind.png" alt="Защитные пленки"/></div>
                            <h3 className="services__layout-title">Защитные пленки</h3>
                            <div className="services__layout-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Nascetur ultrices pellentesque vulputate sit. Ut
                                                                        feugiat.</p></div>
                            <div className="services__layout-btn"><a href="#">Подробнее</a></div>
                        </div>
                        <div className="services__layout">
                            <div className="services__layout-ico"><img src="img/ico/check-list.png" alt="Цветные пленки"/></div>
                            <h3 className="services__layout-title">Цветные пленки</h3>
                            <div className="services__layout-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Nascetur ultrices pellentesque vulputate sit. Ut
                                                                        feugiat.</p></div>
                            <div className="services__layout-btn"><a href="#">Подробнее</a></div>
                        </div>
                        <div className="services__layout">
                            <div className="services__layout-ico"><img src="img/ico/scales.png" alt="Дизайн"/></div>
                            <h3 className="services__layout-title">Дизайн</h3>
                            <div className="services__layout-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Nascetur ultrices pellentesque vulputate sit. Ut
                                                                        feugiat.</p></div>
                            <div className="services__layout-btn"><a href="#">Подробнее</a></div>
                        </div>
                        <div className="services__layout">
                            <div className="services__layout-ico"><img src="img/ico/auto.png" alt="Оклейка салона"/></div>
                            <h3 className="services__layout-title">Оклейка салона</h3>
                            <div className="services__layout-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Nascetur ultrices pellentesque vulputate sit. Ut
                                                                        feugiat.</p></div>
                            <div className="services__layout-btn"><a href="#">Подробнее</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="wrapper">
                <div className="advantages">
                    <div className="advantages-slider">
                        
                        <div className="advantages-slider__img-container">
                            <img className="advantages-slider__img" src="img/slider-sm2.png" alt="Advantages"/>
                        </div>
                        
                        <div className="advantages-slider__content">
                            <div className="btn-left">
                                <div className="btn-left__arrow"></div>
                            </div>
                            <div className="advantages-slider__descriptions">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat
                                  est.
                                  Consectetur lectus.</p>
                            </div>
                            <div className="btn-right">
                                <div className="btn-right__arrow"></div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="advantages-aside">
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/wind.png"
                                                                        alt="100% полироль axem"/></span>
                                <h2 className="advantages__items-title">100% полироль axem</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                  Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                                                                  suspendisse amet nisl vestibulum risus. Quis pretium</p>
                            </div>
                        </div>
                        <div className="hr-line">
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                        </div>
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/check-list.png"
                                                                        alt="выполняем работу четко по тз"/></span>
                                <h2 className="advantages__items-title">Выполняем работу четко по тз</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                                                                  donec
                                                                  elementum egestas vitae ullamcorper. Amet volutpat ornare
                                                                  pharetra amet adipiscing orci, lectus aenean ultricies. Erat
                                                                  viverra eget blandit ornare. Molestie ipsum commodo faucibus
                                                                  rhoncus</p>
                            </div>
                        </div>
                        <div className="hr-line">
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                            <div className="hr-line__items"></div>
                        </div>
                        <div className="advantages__items">
                            <div className="advantages-title__wrapper">
                                <span className="advantages-title__ico"><img src="img/ico/scales.png"
                                                                        alt="У нас лучшие мастера"/></span>
                                <h2 className="advantages__items-title">У нас лучшие мастера</h2>
                            </div>
                            <div className="advantages__items-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                  Vestibulum volutpat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="our-works">
                    <h2 className="our-works__title" id="our-works">Наши работы</h2>
                    <div className="hr-line">
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                        <div className="hr-line__items"></div>
                    </div>
                </div>
            </div>
            <div className="our-works__items">
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2056.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2057.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2058.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2059.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2060.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2061.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2058.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2059.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2056.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2057.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2061.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2060.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2056.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2057.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2058.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2059.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2060.png" alt="Наши работы"/></a>
                </div>
                <div className="our-works__item">
                    <a href="#"><img src="img/Rectangle%2061.png" alt="Наши работы"/></a>
                </div>
            </div>
            
            
            <div className="wrapper">
                <div className="group-form">
                    <form action="#" method="post">
                        <fieldset className="fieldset">
                            <legend className="group-form__title">Ответим на любой вопрос</legend>
                            <div className="hr-line">
                                <div className="hr-line__items"></div>
                                <div className="hr-line__items"></div>
                                <div className="hr-line__items"></div>
                                <div className="hr-line__items"></div>
                            </div>
                            
                            <label>
                                <input type="text" autoComplete="given-name" placeholder="Имя" name="name"/>
                            </label>
                            
                            
                            <label>
                                <input type="text" autoComplete="tel" placeholder="phone" name="phone"/>
                            </label>
                            
                            <div className="input-wrapper">
                                <label>
                                    <textarea placeholder="Вопрос по дизайну, тюнингу и др." name="question"></textarea>
                                </label>
                                <div className="social__wrapper">
                                    <div className="social__item">
                                        <a href="#"><img alt="Telegram" src="img/ico/soc-icons-plane.png"/></a>
                                    </div>
                                    <div className="social__item">
                                        <a href="#"><img alt="You tube" src="img/ico/soc-icons-youtube.png"/></a>
                                    </div>
                                    <div className="social__item">
                                        <a href="#"><img alt="vk" src="img/ico/soc-icons-vk.png"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-form">
                                <div className="footer-form__btn">
                                    <button type="submit">Отправить</button>
                                </div>
                                <div className="footer-form__contacts">
                                    <div className="location"><span><img alt="phone" src="img/ico/ico-location.png"/></span>
                                        <p>Eu
                                          faucibus
                                          et rutrum
                                          fringilla
                                          orci nunc</p>
                                    </div>
                                    <div className="footer-form__contacts-info"><span><img alt="phone" src="img/ico/ico-phone.png"/></span>
                                        <a href="tel: 8 (812) 123-45-67">8 (812) 123-45-67</a>
                                    </div>
                                    <div className="footer-form__contacts-info"><span><img alt="mail"
                                                                                      src="img/ico/ico-mail.png"/></span>
                                        <a href="mailto: test@test.ru">test@test.ru</a>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            
        </main>
        <footer>
            <div className="wrapper">
                <div className="footer">
                    <div className="copyright">
                        2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" href="">Главная</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="">Оклейка автомобилей</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="">Детейлинг автомобилей</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#our-works">Галерея работ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
      </Container>
  )
}

export default IndexPage


export const Head = function ({ location, params, data, pageContext }) {

  const siteData = {
    site: {
      siteMetadata: {
        title: "Gatsby | GSAP | React",
        description: "Description",
      }
    }
  }


  return(
    <BaseSeo>
      <title id="title">{siteData.site.siteMetadata.title}</title>
      <meta name="description" content={siteData.site.siteMetadata.description} />
      <meta id="og:title" name="og:title" content={siteData.site.siteMetadata.title} />
      <meta id="twitter:title" name="twitter:title" content={siteData.site.siteMetadata.title} />
      <meta id="og:description" name="og:description" content={siteData.site.siteMetadata.description} />
      <meta id="twitter:description" name="twitter:description" content={siteData.site.siteMetadata.description} />
    </BaseSeo>
  )
}
