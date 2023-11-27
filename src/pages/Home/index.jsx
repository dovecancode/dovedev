import cx from 'classname'
// import Portfolios from '../../components/Portfolios'
import ProfilePic from '../../components/ProfilePic'
import SocialMediaList from '../../components/SocialMediaList'
import { content, doveContent, doveHomepage, left, right } from './style.module.css'

function Home() {
  return (
    <div className={doveHomepage}>
      <div className="container">
        <div className={doveContent}>
          <div className={cx(content, left)}>
            <ProfilePic />
          </div>
          <div className={cx(content, right)}>
            <SocialMediaList />
          </div>
        </div>
        {/* <Portfolios /> */}
      </div>
    </div>
  )
}

export default Home
