import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
  return (
    <>
      <div className="nav-button">
        <div className="nav-button-container">
          <div className="menu">Menu</div>
          <div className="nav-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="hidden">
        <nav className="navigation">
          <Link to="/">home</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
