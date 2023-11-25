import cx from 'classname'
import Portfolios from '../../components/Portfolios'
import styles from './style.module.css'

function PortfolioPage() {
  return (
    <div className={`container ${cx(styles.portfolios, styles.container)}`}>
      <Portfolios />
    </div>
  )
}

export default PortfolioPage
