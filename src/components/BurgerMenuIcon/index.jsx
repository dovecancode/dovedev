import PropTypes from 'prop-types'
import './style.css'

function BurgerMenuIcon({ isOpen }) {
  return (
    <div className={`nav-burger ${isOpen ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

BurgerMenuIcon.propTypes = {
  isOpen: PropTypes.bool,
}

export default BurgerMenuIcon
