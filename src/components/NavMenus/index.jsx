import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'

function NavMenus({ isOpen, setIsOpen }) {
  return (
    <div className="hidden" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          home
        </Link>
        <Link to="/portfolios" onClick={() => setIsOpen(false)}>
          Projects
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
