import React from "react";
import {useStaticQuery,graphql} from "gatsby"


const BasicSeo = function ({children}) {
  const siteData = useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    description
                    siteUrl
                    title
                }
            }
            
        }
    `
  )

  return(
    <>
      <title id="title">{siteData.site.siteMetadata.title}</title>
      <meta name="description" content={siteData.site.siteMetadata.description} />
      <meta id="og:url" name="og:url" content={siteData.site.siteMetadata.siteUrl} />
      <meta id="og:title" name="og:title" content={siteData.site.siteMetadata.title} />
      <meta id="og:description" name="og:description" content={siteData.site.siteMetadata.description} />
      <meta id="og:type" name="og:type" content="website" />
      <meta id="og:locale" name="og:locale" content={"en_US"} />
      <meta id="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta id="twitter:image" name="twitter:image" content={siteData.site.siteMetadata.siteUrl+"/images/og/OG_16x9.jpg"} />
      <meta id="og:site_name" name="og:site_name" content={siteData.site.siteMetadata.author.name} />
      <meta id="og:image" name="og:image" content={siteData.site.siteMetadata.siteUrl+"/images/og/OG_16x9.jpg"} />
      <meta id="twitter:site" name="twitter:site" content={siteData.site.siteMetadata.author.name} />
      <meta id="twitter:title" name="twitter:title" content={siteData.site.siteMetadata.title} />
      <meta id="twitter:description" name="twitter:description" content={siteData.site.siteMetadata.description} />

      {children}
    </>
  )
}

export default BasicSeo