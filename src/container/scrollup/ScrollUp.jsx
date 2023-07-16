
import React, { useState } from 'react';
import './scrollup.css';
import {BsArrowUpShort} from 'react-icons/bs'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event and toggle the button's visibility
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const isVisible = scrollTop > 300; // Show the button when the user scrolls 300px down
    setIsVisible(isVisible);
  };

  // Function to scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  // Add a scroll event listener to the window when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BsArrowUpShort color= 'var(--color-button)' size={40} 
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    />
      
  );
};

export default ScrollToTopButton;
