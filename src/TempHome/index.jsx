import './style.css'

function TempHome() {
  return (
    <>
      <h1>Dove Dev</h1>
      <div className="container">
        <p>There is nothing much yet here... However, below are my portfolio&apos;s</p>
        <div className="portfolio">
          <a className="card" href="https://reelestate.vercel.app/" target="_blank" rel="noreferrer">
            reelestate
          </a>
          <a className="card" href="https://gadget-world.vercel.app/" target="_blank" rel="noreferrer">
            gadgetworld
          </a>
          <a className="card" href="https://park-spot.vercel.app/" target="_blank" rel="noreferrer">
            parkspot
          </a>
        </div>
      </div>
    </>
  )
}

export default TempHome
