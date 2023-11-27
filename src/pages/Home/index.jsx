import cx from 'classname'
// import Portfolios from '../../components/Portfolios'
import ProfilePic from '../../components/ProfilePic'
import SocialMediaList from '../../components/SocialMediaList'
import styles from './style.module.css'

function Home() {
  return (
    <div className={styles.doveHomepage}>
      <div className="container">
        <div className={styles.doveContent}>
          <div className={cx(styles.content, styles.left)}>
            <ProfilePic />
          </div>
          <div className={cx(styles.content, styles.right)}>
            <SocialMediaList />
          </div>
        </div>
        {/* <Portfolios /> */}
      </div>
    </div>
  )
}

export default Home
