import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
// import BlogPostSnippet from '../../components/BlogPostSnippet/blogPostSnippet';
import Head from 'next/head';
import { getBlogPostSnippets } from '../../lib/blogPosts';
import config from '../../../config';
import BigTitle from '../../components/BigTitle/BigTitle';
import Card from '../../components/home/Section2/Card/Card';

export async function getStaticProps() {
    const blogPostSnippets = await getBlogPostSnippets()
    return {
        props: {
            blogPostSnippets: blogPostSnippets,
        }
    }
}

export default function BlogPost({ blogPostSnippets }) {
    
    const { asPath } = useRouter();
    
    const title = 'Conseils, analyse et actualités sur l\'investissement immobilier';
    const description = 'Conseils, analyse et actualités sur l\'investissement immobilier';
    

    const snippets = blogPostSnippets.items.map((snippet) => {
        var updated = new Date(snippet.fields.lastUpdate)
        updated = updated.toLocaleDateString('fr-FR')
        return (
            <>
            <div className='item'>
                <Card
                    titre={snippet.fields.title}
                    texte={snippet.fields.description}
                    date={updated}
                    image={'https:' + snippet.fields.heroImageSvg.fields.file.url}
                    href={'/' + config.BLOG.path + '/' + snippet.fields.slug}
                    animated = {true}
                    article={true}
                />
            </div>
            </>
        )
    });

    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta itemProp="name" content={title} />
                <link rel="canonical" href={config.BASE_URL + asPath} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content="/images/home/infos.png" />

                <meta property="og:url" content={config.BASE_URL + asPath} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="o:image" content="/images/home/infos.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="/images/home/infos.png" />
            </Head>
            <BigTitle title={title} theme = 'light' width='medium' />
            <div className="blog-section">
                <div className='blog-container'>
                    {snippets}
                </div>
            </div>
        </Layout>
    )
}

BlogPost.propTypes = {
    blogPostSnippets: PropTypes.object.isRequired,
}