import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import ScreenEgg from '../ScreenEgg'

const socialNetworks = [
  {
    id: 1,
    href: "https://github.com/diyoifa",
    icon: AiFillGithub
  },
  {
    id: 2,
    href: "https://github.com/diyoifa",
    icon: AiFillYoutube
  },
  {
    id: 1,
    href: "https://github.com/diyoifa",
    icon: AiFillTwitterCircle
  },
  {
    id: 1,
    href: "https://github.com/diyoifa",
    icon: AiFillInstagram
  },
  {
    id: 1,
    href: "https://github.com/diyoifa",
    icon: AiFillFacebook
  },

]

const SocialNetworks = ({
  className
}) => {
  return (
    <ScreenEgg type='left'>
      <ul className={cl(className, styles.list)}>
        {
          socialNetworks.map(socialNetwork => 
            <li 
              key={socialNetwork.id}
              className={styles.listItem}
            >
              <a 
                href={socialNetwork.href}
                target="_blank"
                rel='noreferrer'
                className={styles.listLink}
              >
              {
                React.createElement(
                  socialNetwork.icon,
                  {
                    color:"black",
                    size: "50"
                  }
                )
              }
              </a>
            </li>
          )
        }
      </ul>
    </ScreenEgg>

  )
}

export default SocialNetworks
