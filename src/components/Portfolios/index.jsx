import { useLocation } from 'react-router-dom'
import portfolioData from '../../assets/data/portfoliosData'
import PortfolioItem from '../PortfolioItem'
import './style.css'

const feacturedP = portfolioData.slice(0, 3)

function Portfolios() {
  let location = useLocation()

  return (
    <div className="dove-portfolio">
      {location.pathname === '/' ? <h2>Feature Portfolio</h2> : ''}
      <div className="cards">{location.pathname === '/' ? feacturedP.map((portfolio) => <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />) : portfolioData?.map((portfolio) => <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />)}</div>
    </div>
  )
}

export default Portfolios
