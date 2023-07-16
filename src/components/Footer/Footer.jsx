import './footer.css';
import ScrollToTopButton from '../../container/scrollup/ScrollUp';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      < ScrollToTopButton />
      <div className="app__footer-container">
        <div className="app__footer-content">
          <h3>Hicamp is everywhere you want</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis assumenda distinctio non magni cumque autem, odit animi. Nulla error reprehenderit perferendis, quod itaque numquam at inventore accusamus est nobis cupiditate?</p>
        </div>

        <div className="app__footer-links">
          <div className="app__footer-links-container">
            <h3>Get to Know us</h3>
            <ul>
              <li>about us</li>
              <li>rules & Reservation policies</li>
              <li>accessibility</li>
              <li>media center</li>
              <li>site map</li>
            </ul>
          </div>

          <div className="app__footer-links-container">
            <h3>Plan with Us</h3>
            <ul>
              <li>find trip inspiration</li>
              <li>build a trip</li>
              <li>buy a pass</li>
              <li>enter a lottery</li>
            </ul>
          </div>

          <div className="app__footer-links-container">
            <h3>Let Us Help You</h3>
            <ul>
              <li>your account</li>
              <li>your reservation</li>
              <li>contact us</li>
              <li>help center</li>
              <li>submit feedback</li>
            </ul>
          </div>
        
      </div>
      </div>
      <p className="copyright">2020. All rights reserved.</p>
    </div>
  )
}

export default Footer