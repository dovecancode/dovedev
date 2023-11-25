import { useLocation } from 'react-router-dom'
import portfolioData from '../../assets/data/portfoliosData'
import PortfolioItem from '../PortfolioItem'
import './style.css'

let feacturedP = portfolioData.slice(0, 3)

function Portfolios() {
  let location = useLocation()

  if (portfolioData.length == 0) {
    return <div className="center">No project yet</div>
  }

  return (
    <>
      <div className="dove-portfolio">
        {location.pathname === '/' ? <h2>Featured Projects</h2> : ''}
        <div className="cards">{location.pathname === '/' ? feacturedP.map((portfolio) => <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />) : portfolioData.map((portfolio) => <PortfolioItem key={`list-${portfolio.id}`} portfolios={portfolio} />)}</div>
      </div>
    </>
  )
}

export default Portfolios
