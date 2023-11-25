import PropTypes from 'prop-types'
import styles from './style.module.css'

function BurgerMenuIcon({ isOpen }) {
  return (
    <div className={`${styles.navBurger} ${isOpen ? styles.open : ''}`}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  )
}

BurgerMenuIcon.propTypes = {
  isOpen: PropTypes.bool,
}

export default BurgerMenuIcon
