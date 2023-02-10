/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import Author from '../../components/Author/author';
import SocialSharing from '../../components/SocialSharing/socialSharing';
import BlogPostTableOfContent from '../../components/BlogPostTableOfContent/blogPostTableOfContent';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './slug.module.scss';
import { renderOptions } from '../../lib/contentfulRenderer';
import { getAllBlogPostSlugs, getBlogPostData } from '../../lib/blogPosts';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import config from "../../../config";

export async function getStaticPaths() {
  const paths = await getAllBlogPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const blogPostData = await getBlogPostData(await params.slug)
  return {
    props: {
      blogPostData: blogPostData
    }
  }
}

export default function BlogPost({ blogPostData }) {

  const { asPath } = useRouter();

  const intro = documentToReactComponents(blogPostData.fields.intro, renderOptions);
  const body = documentToReactComponents(blogPostData.fields.body, renderOptions);
  const updated = new Date(blogPostData.fields.lastUpdate);
  const updatedAtString = 'Mis à jour le ' + updated.toLocaleDateString('fr-FR');
  const structuredMetaData = `{
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "author":{
      "@type": "Person",
      "name": "${blogPostData.fields.author.fields.firstName}"
    },
    "headline": "${blogPostData.fields.title}",
    "description": "${blogPostData.fields.description}",
    "image": ["https: ${blogPostData.fields.heroImagePng.fields.file.url}"],
    "datePublished": "${blogPostData.fields.lastUpdate}",
    "dateModified": "${blogPostData.fields.lastUpdate}"
  }`;
  
  useEffect(() => {
    let elem = document.querySelector('h6');
    if (!elem) {
      const h3Elem = document.querySelectorAll('h3');
      elem = h3Elem[h3Elem.length - 1];
    }
    const article = document.querySelector('article');
    const img = elem.nextElementSibling;
    const elements = [];
    let nextElement = img.nextElementSibling;

    while (nextElement) {
      elements.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    const contentfulLeft = document.createElement('div');
    contentfulLeft.classList.add('contentful-left');
    contentfulLeft.appendChild(img);

    const contentfulRight = document.createElement('div');
    contentfulRight.classList.add('contentful-right');
    contentfulRight.appendChild(elem);

    
    elements.forEach(element => {
      contentfulRight.appendChild(element);
    });
    
    const allElement = document.createElement('div');
    allElement.classList.add('contentful-element');
    allElement.appendChild(contentfulLeft);
    allElement.appendChild(contentfulRight);

    article.appendChild(allElement);
  }, []);
  

  return (
    <Layout>
      <Head>
        <title>{blogPostData.fields.title}</title>
        <script type="application/ld+json">
          {structuredMetaData}
        </script>
        <meta name="description" content={blogPostData.fields.description} />
        <meta itemProp="name" content={blogPostData.fields.title} />
        <meta name="author" content={blogPostData.fields.author.fields.firstName} />
        <link rel="canonical" href={config.BASE_URL + asPath} />
        <meta itemProp="description" content={blogPostData.fields.description} />
        <meta itemProp="image" content={'https:' + blogPostData.fields.heroImagePng.fields.file.url} />

        <meta property="og:url" content={config.BASE_URL + asPath} />
        <meta property="og:type" content='article' />
        <meta property="og:title" content={blogPostData.fields.title} />
        <meta property="og:description" content={blogPostData.fields.description} />
        <meta property="og:image" content={'https:' + blogPostData.fields.heroImagePng.fields.file.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPostData.fields.title} />
        <meta name="twitter:description" content={blogPostData.fields.description} />
        <meta name="twitter:image" content={'https:' + blogPostData.fields.heroImagePng.fields.file.url} />
      </Head>
      <div className={styles.mainContent}>
        <Row className={'justify-content-center gx-0'}>
          <Col xs={11} md={9}>
            <Row className="align-items-center">
              <Col md={9}>
                <Author
                  img={'https:' + blogPostData.fields.author.fields.profilePicture.fields.file.url}
                  firstLine={blogPostData.fields.author.fields.firstName}
                  secondLine={updatedAtString}
                />
              </Col>
              <Col xs='auto' className="me-auto">
                <SocialSharing
                  url={config.BASE_URL + asPath}
                />
              </Col>
            </Row>

          <div className={styles.title}>
            <h1>{blogPostData.fields.title}</h1>
          </div>

            <article>
              {intro}
                <BlogPostTableOfContent
                  blogPostBodyContent={blogPostData.fields.body.content}
                />
              {body}
            </article>

            <div className="divider" />

            <Author
              img={'https:' + blogPostData.fields.author.fields.profilePicture.fields.file.url}
              firstLine={blogPostData.fields.author.fields.firstName}
              secondLine={blogPostData.fields.author.fields.title}
            />
          </Col>
        </Row>
      </div>
    </Layout >
  )
}

BlogPost.propTypes = {
  blogPostData: PropTypes.object.isRequired
};