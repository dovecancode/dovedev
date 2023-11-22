import portfolioData from '../../assets/data/portfoliosData'
import PortfolioItem from '../PortfolioItem'
import './style.css'

const projects = portfolioData.slice(0, 3)

function Portfolios() {
  return (
    <div className="dove-portfolio">
      <h2>Feature Portfolio</h2>
      <div className="cards">
        {projects.map((portfolio) => (
          <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />
        ))}
      </div>
    </div>
  )
}

export default Portfolios
