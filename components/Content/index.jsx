import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import BlockContent from '@sanity/block-content-to-react'
import { clientConfig } from '@/lib/client'

const Content = ({ body, className }) => {
  return (
    <div className={cl(className, styles.content)}>
      {body.map((block, index) => (
        <BlockContent
          key={index}
          blocks={block}
          imageOptions={{ w: 1000, h: 750, fit: 'max' }}
          projectId={clientConfig.projectId}
          dataset={clientConfig.dataset}
        />
      ))}
    </div>
  )
}

export default Content
