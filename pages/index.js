import {
   BuyMeCoffee, 
   Section,
   Cover, 
   Button, 
   SocialNetworks, 
   Title, 
   Post, 
   PostGrid } from '@/components'
import post, {loadData} from './api/post'
import { useState } from 'react'
import Head from 'next/head'

const LOAD_MORE_STEP = 4

export default function Home({initialPosts, total}) {
  //  console.log("🚀 ~ file: index.js:5 ~ Home ~ initialPosts:", initialPosts)
  const [posts, setPosts] = useState(initialPosts)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [loading, setLoading]= useState(false)

  const showLoadButton = total > loadedAmount

  const getMorePosts = async()=>{
    setLoading(true)
    try {
      const data = await fetch(`/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`).then(res => res.json())
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
      setPosts([...posts, ...data.posts])
      setLoading(false)
    } catch (error) {
      console.log("🚀 ~ file: index.js:26 ~ getMorePosts ~ error:", error)
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
         <title>Notifinanciera</title>
      </Head>
      <Section>
         <Cover title = "Noti <br/> Financiera"/> 
        <SocialNetworks/>
        <BuyMeCoffee/>
      </Section>
      <Section>
        <Title type=''>New posts</Title>
        <PostGrid>
          {
            posts.map(post=>
              <Post
                  key={post.slug}
                  {...post}
              /> 
            )
          }
        </PostGrid>

       { 
       showLoadButton &&
        <div
            style={{
              display:"flex", 
              justifyContent:"center"
          }}
          >
            <Button
              disable = {loading}
              onClick={getMorePosts}
            >
              Load more posts...
            </Button>
         </div>
        }
      </Section>

    </div>
  )
}

export async function getServerSideProps() {
  const {posts, total} = await loadData(0, LOAD_MORE_STEP)
  return {
    props: {
      initialPosts: posts,
      total
    },
  }
}
