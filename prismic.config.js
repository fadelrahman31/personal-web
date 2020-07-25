// import Prismic from 'prismic-javascript'
const Prismic = require('prismic-javascript');
// import PrismicDOM from 'prismic-dom'
const PrismicDOM = require('prismic-dom');

const config = {
    baseUrl: 'https://fadelrahman.cdn.prismic.io/api/v2',
    access_token: ''
} 

export const initApi = req => {
    return Prismic.getApi(config.baseUrl, {
        accessToken: config.access_token,
        req: req
    })
}

export const linkResolver = doc => {
    if (doc.type === 'fadel-blog-post') return `/blog/${doc.uid}`
    return `/${doc.uid}`
}

export const generatePageData = (documentType, data) => {
    switch (documentType) {
        case 'blog_page' :
            return {
                posts: data
            }
        case 'fadel-blog-post' :
            return {
                title: PrismicDOM.RichText.asText(data.title),
                content: PrismicDOM.RichText.asText(data.content)
            }
    }
}