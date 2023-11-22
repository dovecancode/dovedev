import portfolioData from '../../assets/data/portfoliosData'
import PortfolioItem from '../PortfolioItem'

function Portfolios() {
  return (
    <div className="dove-portfolio">
      <h2>Feature Portfolio</h2>
      <div className="cards">
        {portfolioData.map((portfolio) => (
          <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />
        ))}
      </div>
    </div>
  )
}

export default Portfolios
