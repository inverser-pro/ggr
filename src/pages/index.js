import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import BaseSeo from "../components/BasicSeo"
import Container from '../components/Container.js'

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
          className="pr"
        />
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
