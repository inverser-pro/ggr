import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import BaseSeo from "../components/BasicSeo"
import Container from '../components/Container'

const IndexPage = () => {
  return (
    <>
      <Container>
        <StaticImage
          src="../images/mp/MP_bg-tyta.jpg"
          width={1920}
          quality={90}
          formats={["auto", "webp", "avif"]}
          alt="beenve"
          loading="lazy"
          placeholder="blurred"
          className="pa z-1 MPimg"
        />
        <div className="MPS fx fdc ac jc">
          <div className="pr">
            <h1>CAR DETAILING</h1>
            <span className="pa fx fdc tc cf lh2">
              <strong>СОЗДАДИМ ИЗ ВАШЕГО АВТО</strong>
              <strong>НАСТОЯЩИЙ ШЕДЕВР</strong>
            </span>
          </div>
          <button className="btn-go">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
        <div className="pr MP3Bl">
          <div className="pa MP3BlS"></div>
          <div className="pa MP3BlS"></div>
          <div className="container fx fsb MP3BlD">
            <div className="fx ac fdc gap2 tc lh2">
              <h3>АДРЕС:</h3>
              <span>119200, Москва, Смоленская-Сенная площадь, 32/34</span>
            </div>
            <div className="fx ac fdc gap2 tc lh2">
              <h3>ТЕЛЕФОН:</h3>
              <span><a href="tel:+7-499-244-16-06">+7 (499) 244-16-06</a></span>
              <span><a href="tel:+7-499-244-16-06">+7 (499) 244-16-06</a></span>
            </div>
            <div className="fx ac fdc gap2 tc lh2">
              <h3>ГРАФИК:</h3>
              <span>ПН-ПТ : 10:00 - 20:00</span>
              <span>СБ-ВС : 10:00 - 18:00</span>
            </div>
          </div>
        </div>
        <div className="MPSpace"></div>
      </Container>
    </>
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
