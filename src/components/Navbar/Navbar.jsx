import { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import logo from '../../assets/logo.png'
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
        <div className="app__navbar-logo">
            <img src={logo} alt="" />
        </div>

        <div className="app__navbar-links">
            <div className="app__navbar-links-header">
                <Menu />
            </div>
            <div className="app__navbar-links-sign">
                <a href="">Sign up</a>
                <button type="button" className="custom__button">Sign In</button>
            </div>
        </div>

        <div className="app__navbar-menu">
            <div className="app__navbar-menu-button">
                {toggleMenu
                
                    ? <GrFormClose size={30} onClick={() => setToggleMenu(false)}/>
                    : <HiOutlineMenu size={30} onClick={() => setToggleMenu(true)}/>   
                }
            </div>
            
            {toggleMenu && (
                <div className="app__navbar-menu-container">
                    <div className="app__navbar-menu-container_overlay">
                        <Menu />
                        <div className="app__navbar-menu-container-sign">
                            <a href="">Sign up</a>
                            <a href="">Sign ip</a>
                        </div>
                </div>
            </div>
            )}
            
        </div>

    </div>
  )
}

export default Navbar