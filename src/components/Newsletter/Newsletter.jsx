import './newsletter.css';
import tent from '../../assets/tent.png';
import {HiOutlineMail} from 'react-icons/hi'
import {BiPaperPlane} from 'react-icons/bi';

const Newsletter = () => {
  return (
    <div className="app__newsletter section__padding">
      <div className="app__newsletter-container">
        <div className="app__newsletter-content">
          <h1>Let's Stay in Touch</h1>
          <p>Get travel planning ideas, helpful tips nad stories from our visitors delivered right to your inbox.</p>

          <div className="app__newsletter-content-sign">
            <HiOutlineMail size={25} color='var(--color-button)'/>
            <input type="email" placeholder='Email Address' name="" id="" />
            <BiPaperPlane className='send' style={{padding:'.3rem .4rem'}} size={35} color='#fff'/>
          </div>
        </div>

        <div className="app__newsletter-img">
          <img src={tent} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Newsletter