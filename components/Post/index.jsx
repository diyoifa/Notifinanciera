import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '..'
import { urlFor } from '@/lib/client'

const Post = ({
  className,
  image,
  title,
  description,
  slug
}) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug?.current)}`} 
      className={cl(className, styles.post)}
    >
      <a className={styles.postLink}>
        <div>
          <Title 
            type='small'
            className={styles.postTitle}
          >
            {title}
          </Title>
          <div className={styles.postContent}>
            {image && ( // Verifica si image tiene un valor antes de renderizar el componente <Image>
              <div className={styles.postImage}>
                <Image
                  src={urlFor(image).url()}
                  width={100}
                  height={100}
                  alt={image?.caption}
                />
              </div>
            )}
            <p className={styles.postDescription}>
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Post
