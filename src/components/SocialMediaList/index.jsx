import { FaCodepen, FaEnvelope, FaGithub } from 'react-icons/fa'
import Item from '../SocialMediaItem'
import './style.css'

const socialMedia = [
  { id: 1, icon: <FaGithub />, link: 'https://github.com/dovecancode' },
  { id: 2, icon: <FaCodepen />, link: 'https://codepen.io/dovecancode' },
  { id: 3, icon: <FaEnvelope />, link: 'mailto:ndoverte11@gmail.com' },
]

function SocialMediaList() {
  return (
    <>
      <span>Hello there, I&apos;m </span>
      <h1>Nelson Doverte</h1>
      <p>A self-taught web developer that loves to build websites primarily using React</p>
      <ul className="social-media">
        {socialMedia.map((social) => (
          <Item key={`list-${social.id}`} item={social} />
        ))}
      </ul>
    </>
  )
}

export default SocialMediaList
