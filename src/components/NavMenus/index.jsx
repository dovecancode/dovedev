import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import styles from './style.module.css'

function NavMenus({ isOpen, setIsOpen }) {
  return (
    <div className={styles.hidden} style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          home
        </Link>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          projects
        </NavLink>
      </nav>
    </div>
  )
}

NavMenus.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default NavMenus
