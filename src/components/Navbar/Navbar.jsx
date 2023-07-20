import { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import {motion, useTime} from 'framer-motion'
;import logo from '../../assets/logo.png'
import './navbar.css';

const Menu = () => (
    <>
    <a href="">Home</a>
    <a href="">Destination</a>
    <a href="">Near me</a>
    <a href="">Events</a>
    <a href="">Blog</a>
    <a href="">Gallery</a>
    <a href="">About</a>
    <a href="">Contact Us</a>
    </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='app__navbar '>
        <motion.div className="app__navbar-logo"
        initial={{
            y:-50,
            opacity:0
          }}
    
          animate={{
            y:0,
            opacity:1
          }}
    
          transition={{
            delay: 2.5,
            duration:1.5
          }}
        >
            <img src={logo} alt="" />
        </motion.div>

        <motion.div className="app__navbar-links"
            initial={{
                y:-50,
                opacity:0
              }}
        
              animate={{
                y:0,
                opacity:1
              }}
        
              transition={{
                delay: 2.5,
                duration:1.5
              }}
        >
            <div className="app__navbar-links-header">
                <Menu />
            </div>
            <div className="app__navbar-links-sign">
                <a href="#signup">Sign up</a>
                <a href="#signin"><button type="button" className="custom__button">Sign In</button></a>
            </div>
        </motion.div>

        <div className="app__navbar-menu">
            <motion.div className="app__navbar-menu-button"
                whileHover={{
                    scale:1.2,
                    opacity:0.8
                }}

                whileTap={{
                    scale:0.9,
                    rotate:90,
                }}
            >
                {toggleMenu
                    ? <GrFormClose size={30} onClick={() => setToggleMenu(false)}/>
                    : <HiOutlineMenu size={30} onClick={() => setToggleMenu(true)}/>   
                }
            </motion.div>
            
            {toggleMenu && (
                <div className="app__navbar-menu-container">

                    <div  className="app__navbar-menu-container_overlay">
                        <Menu />
                        <div className="app__navbar-menu-container-sign">
                            <a href="">Sign up</a>
                            <a href="">Sign in</a>
                        </div>
                </div>
            </div>
            )}
            
        </div>

    </div>
  )
}

export default Navbar