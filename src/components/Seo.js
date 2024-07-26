import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import {Helmet} from "react-helmet"


const Seo = ({description,lang,meta,title})=>{
    const {site}=useStaticQuery(graphql`
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
    `)
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata.title
    return(
        <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={ defaultTitle ? `%s | ${defaultTitle}` : null}
            link={[
                {"rel": "shortcut icon",
                 "type": "images/og/vnd.microsoft.icon",
                 "href": "/favicon.ico"
                },
                {"rel": "icon",
                 "type": "images/og/svg+xml",
                 "href": "/favicon.svg"
                },
               ]}
            meta={[
                {
                    property:'og:url',
                    content:site.siteMetadata.siteUrl
                },
                {
                    property:'og:title',
                    content:defaultTitle
                },
                {
                    name:'description',
                    content:metaDescription
                },
                {
                    property:'og:description',
                    content:metaDescription
                },
                {
                    property:'og:type',
                    content:'website'
                },
                {
                    name:'author',
                    content:site.siteMetadata.author.name
                },
                {
                    name:'og:image',
                    content:site.siteMetadata.siteUrl+'/images/og/OG_1x1.jpg'
                },
                {
                    name:'og:image:width',
                    content:'631'
                },
                {
                    name:'og:image:height',
                    content:'630'
                },
                {
                    name:'og:image',
                    content:site.siteMetadata.siteUrl+'/images/og/OG_16x9.jpg'
                },
                {
                    name:'og:image:width',
                    content:'1201'
                },
                {
                    name:'og:image:height',
                    content:'630'
                },
            ].concat(meta)}
        />
    )
}
Seo.defaultProps={
    lang:'en',
    meta:[],
    description:''
}

export default Seo