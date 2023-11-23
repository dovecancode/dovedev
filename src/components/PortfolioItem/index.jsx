import PropTypes from 'prop-types'
import './style.css'

import { Link } from 'react-router-dom'

function PortfolioItem({ portfolios }) {
  const { title, description, icons } = portfolios

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="options">
        {icons.map((icon, idx) => (
          <div className="options" key={`p-icon-${idx}`}>
            <Link to={icon.sourse.link} target="_blank" rel="noreferrer" title="github">
              <icon.sourse.icon />
            </Link>
            <Link to={icon.achor.link} target="_blank" rel="noreferrer" title="live">
              <icon.achor.icon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  portfolios: PropTypes.object,
}

export default PortfolioItem
