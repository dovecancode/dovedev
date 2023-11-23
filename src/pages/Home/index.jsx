// import Portfolios from '../../components/Portfolios'
import ProfilePic from '../../components/ProfilePic'
import SocialMediaList from '../../components/SocialMediaList'

import './style.css'

function Home() {
  return (
    <div className="dove-homepage">
      <div className="container">
        <div className="dove-content">
          <div className="content left">
            <ProfilePic />
          </div>
          <div className="content right">
            <SocialMediaList />
          </div>
        </div>
        {/* <Portfolios /> */}
      </div>
    </div>
  )
}

export default Home
