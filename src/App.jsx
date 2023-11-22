import profile from './assets/portfolio-profile-v2.jpg'
import SocialMediaList from './components/SocialMediaList'

function App() {
  return (
    <>
      {/* <nav>hello</nav> */}
      <div className="portfolio">
        <div className="container">
          <div className="dove-content">
            <div className="content left">
              <img src={profile} alt="Nelson Doverte" />
            </div>
            <div className="content right">
              <span>Hello there, I&apos;m </span>
              <h1>Nelson Doverte</h1>
              <p>A self-taught web developer that loves to build websites primarily using React</p>
              <SocialMediaList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
