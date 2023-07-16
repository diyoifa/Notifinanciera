import { Article, Content, Title } from '@/components'
import React from 'react'
import { client } from '@/lib/client'
import { format } from 'date-fns'
import Head from 'next/head'

const Post = ({ post }) => {
    // console.log("🚀 ~ file: [slug].js:6 ~ Post ~ post:", post)
    const date = format(new Date(post.publishedDate), 'dd MMM yyy')
    return (

        <Article backUrl="/" >
            <Head>
                <title>{post.meta_title}</title>
            </Head>
            <Title
                // type='medium'
                // className={styles.postTitle}
                style={{ marginBottom: "0.5em" }}
            >
                {post.title}
            </Title>
            <p style={{ fontFamily: "'Poppins', sans-serif", marginBottom: "1em" }}>
                {date}
            </p>
            <Content body={post.body} />
        </Article>
    )
}
export default Post

export async function getStaticPaths() {
    const query = `*[_type == "post"] {
        slug{
            current
        }
    }`
    const posts = await client.fetch(query)
    const paths = posts.map(post => ({
        params: {
            slug: post.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params: { slug } }) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`
    const post = await client.fetch(query)
    return {
        props: {
            post
        }
    }
}
