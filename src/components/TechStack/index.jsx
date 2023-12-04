import { BiLogoSass } from 'react-icons/bi'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import styles from './styles.module.css'

function TechStack() {
  return (
    <div className={styles.techStack}>
      <p>
        TechStack <span className={styles.divider}>|</span>
      </p>
      <div className={styles.icons}>
        <FaHtml5 size={30} color="#e34c26" />
        <FaCss3Alt size={30} color="#264de4" />
        <BiLogoSass size={30} color="cd6799" />
        <IoLogoJavascript size={30} color="f0db4f" />
        <FaReact size={30} color="61dbfb" />
      </div>
    </div>
  )
}

export default TechStack
