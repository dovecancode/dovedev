import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

function PortfolioItem({ portfolios }) {
  const { title, description, icons } = portfolios

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>

      {icons.map((icon, idx) => (
        <div className={styles.options} key={`p-icon-${idx}`}>
          <Link to={icon.sourse.link} target="_blank" rel="noreferrer" title="Github">
            <icon.sourse.icon />
          </Link>
          <Link to={icon.achor.link} target="_blank" rel="noreferrer" title="Live Site">
            <icon.achor.icon />
          </Link>
        </div>
      ))}
    </div>
  )
}

PortfolioItem.propTypes = {
  portfolios: PropTypes.object,
}

export default PortfolioItem
