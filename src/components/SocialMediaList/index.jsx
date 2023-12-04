import { FaCodepen, FaEnvelope, FaGithub } from 'react-icons/fa'
import Item from '../SocialMediaItem'
import styles from './style.module.css'

const socialMedia = [
  { id: 1, icon: <FaGithub />, link: 'https://github.com/dovecancode' },
  { id: 2, icon: <FaCodepen />, link: 'https://codepen.io/dovecancode' },
  { id: 3, icon: <FaEnvelope />, link: 'mailto:ndoverte11@gmail.com' },
]

function SocialMediaList() {
  return (
    <ul className={styles['social-media']}>
      {socialMedia.map((social) => (
        <Item key={`list-${social.id}`} item={social} />
      ))}
    </ul>
  )
}

export default SocialMediaList
