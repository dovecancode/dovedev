import { FaCodepen, FaEnvelope, FaGithub } from 'react-icons/fa'
import Item from '../SocialMediaItem'
import styles from './style.module.css'

const iconSource = [
  { id: 1, icon: <FaGithub />, link: 'https://github.com/dovecancode' },
  { id: 2, icon: <FaCodepen />, link: 'https://codepen.io/dovecancode' },
  { id: 3, icon: <FaEnvelope />, link: 'mailto:ndoverte11@gmail.com' },
]

function SocialMediaList() {
  return (
    <ul className={styles['p-link']}>
      {iconSource.map((icon) => (
        <Item key={`list-${icon.id}`} item={icon} />
      ))}
    </ul>
  )
}

export default SocialMediaList
