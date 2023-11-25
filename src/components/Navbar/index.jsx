import { useState } from 'react'
import BurgerMenuIcon from '../BurgerMenuIcon'
import NavMenus from '../NavMenus'
import styles from './style.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${styles.navButton} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.navButtonContainer}>
          <div className={styles.menu}>Menu</div>
          <BurgerMenuIcon isOpen={isOpen} />
        </div>
      </div>

      <NavMenus isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar
