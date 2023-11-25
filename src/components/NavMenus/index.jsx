import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

function NavMenus({ isOpen, setIsOpen }) {
  return (
    <div className={styles.hidden} style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          home
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          projects
        </Link>
      </nav>
    </div>
  )
}

NavMenus.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default NavMenus
