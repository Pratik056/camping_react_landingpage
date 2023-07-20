
import './header.css';
import {motion} from 'framer-motion';


const Header = () => {
  return ( 
    <div className='app__header section__padding'>
      <div className="app__header-text">
        <motion.h1
        initial={{
          y:-50,
          opacity:0.5
        }}
  
        animate={{
          y:0,
          opacity:1
        }}
  
        transition={{
          delay: 1,
          duration:1.5
        }}>
        Find Yourself <br /> Outside</motion.h1>
          <motion.p
            initial={{
              opacity:0,
              y:-50
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:1.5,
              duration:2
            }}
          >Book unique camping experience on over 300,00 campsites,<br /> cabins, RV parks, public parks and more.
          </motion.p>
        <motion.button type="button" className="custom__button"
          initial={{
            opacity:0,
            y:-50
          }}

          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:2.5,
            duration:1.5
          }}
        >Discover</motion.button>
      </div>

    </div>
  )
}

export default Header