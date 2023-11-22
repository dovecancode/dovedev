// import Portfolios from './components/Portfolios'
import ProfilePic from './components/ProfilePic'
import SocialMediaList from './components/SocialMediaList'

function App() {
  return (
    <>
      {/* <nav>hello</nav> */}
      <div className="portfolio">
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
    </>
  )
}

export default App
