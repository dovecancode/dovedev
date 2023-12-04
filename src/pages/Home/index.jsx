import cx from 'classname'
// import Portfolios from '../../components/Portfolios'
import HomeGreeting from '../../components/HomeGreeting'
import ProfilePic from '../../components/ProfilePic'
import SocialMediaList from '../../components/SocialMediaList'
import TechStack from '../../components/TechStack'
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
            <HomeGreeting />
            <SocialMediaList />
            <TechStack />
          </div>
        </div>
        {/* <Portfolios /> */}
      </div>
    </div>
  )
}

export default Home
