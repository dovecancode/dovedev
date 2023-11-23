import { useState } from 'react'
import BurgerMenuIcon from '../BurgerMenuIcon'
import NavMenus from '../NavMenus'
import './style.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`nav-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="nav-button-container">
          <div className="menu">Menu</div>
          <BurgerMenuIcon isOpen={isOpen} />
        </div>
      </div>

      <NavMenus isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar
