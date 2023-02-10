import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../config'

var contentful = require('contentful')
var contentfulClient = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
});

export async function getBlogPostData(slug) {
    let entry = await contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': slug
    })
        .then(function (entries) {
            return entries.items[0]
        })
        .catch(error => {
            console.log(error);
            return null
        });
    return entry
}

export async function getBlogPostSnippets() {
    let entries = await contentfulClient.getEntries({
        'content_type': 'blogPost',
        order: '-fields.lastUpdate'
    })
        .then(function (entries) {
            return entries
        })
        .catch(error => {
            console.log(error);
            return null
        });
    return entries
}

export async function getAllBlogPostSlugs() {    
    let slugs = await contentfulClient.getEntries({
        'content_type': 'blogPost'
    })
        .then(function (entries) {
            return entries.items.map(entry => {
                return {
                    params: {
                        slug: entry.fields.slug
                    }   
                }
            });
        })
        .catch(error => {
            console.log(error);
            return null
        });
    return slugs
}