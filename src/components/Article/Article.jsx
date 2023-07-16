import bonfire from '../../assets/bonfire.png'
import tickets from '../../assets/tickets.png'
import permit from '../../assets/filled outline.png'
import fishing from '../../assets/fishing.png'

import './article.css'

const Article = () => {
  return (
    <div className="app__article section__padding">
        <div className="app__article-grid">
            <div className="app__article-grid-content">
            <img src={bonfire} alt="" />
            <h3>Camping & Day Use</h3>
            <p>Return to your favourite spot or discover a new one thats right for you</p>
            </div>

            <div className="app__article-grid-content">
            <img src={tickets} alt="" />
            <h3>Tours & Tickets</h3>
            <p>Reserve tours and tickets to participate in events.</p>
            </div>

            <div className="app__article-grid-content">
            <img src={permit} alt="" />
            <h3>Permits</h3>
            <p>Obtain permits for access to hish demand locations.</p>
            </div>

            <div className="app__article-grid-content">
            <img src={fishing} alt="" />
            <h3>Recreation Activities</h3>
            <p>Find the best sopts for hunting, fishing & recreation shooting</p>
            </div>
        </div>
    </div>
  )
}

export default Article