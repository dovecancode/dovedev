import PropTypes from 'prop-types'

function PortfolioItem({ portfolios }) {
  const { title, description, icons } = portfolios

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="options">
        {icons.map((icon, idx) => (
          <div className="options" key={`p-icon-${idx}`}>
            <a href={icon.sourse.link} target="_blank" rel="noreferrer">
              <icon.sourse.icon />
            </a>
            <a href={icon.achor.link} target="_blank" rel="noreferrer">
              <icon.achor.icon />
            </a>
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
