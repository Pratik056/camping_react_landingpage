
import './subheading.css';
import {useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Subheading = ({img, title}) => {
  const [toggleHeart, setToggleHeart] = useState(false);
  return (
    <div className="app__subheading">
        <div className="app__subheading-img">
            {toggleHeart 
              ? <AiFillHeart className='heart' size={25} color='var(--color-button)' onClick={() => setToggleHeart(false)}/> 
              : <AiOutlineHeart className='heart' size={25} color='var(--color-button)' onClick={() => setToggleHeart(true)}/>
            }
            
            <img src={img} alt="" />
            <p>$36/night</p>
        </div>
        <div className="app__subheading-text">
            <h3>{title}</h3>
            <p>Book unique camping experiences on over 3,00,000 campsites.</p>
            <button type="button" className="custom__button">Read More</button>
        </div>
    </div>
  )
}

export default Subheading