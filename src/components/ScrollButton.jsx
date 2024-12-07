import React, { useState } from 'react'; 
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollButton = () =>{ 
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 400){ 
      setVisible(true); 
    } else if (scrolled <= 400){ 
      setVisible(false); 
    } 
  };

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth',
    });
    window.location.hash = ""; // Reset the hash to the top
    setActive(''); // Reset active link when scrolling to top
  }; 

  window.addEventListener('scroll', toggleVisible); 

  return (
    visible && 
    <button className='fixed bottom-10 right-7 z-50 cursor-pointer p-4 bg-opacity-10 bg-slate-300 rounded-md hover:text-black hover:bg-[#915EFF]' onClick={scrollToTop}> 
      <AiOutlineArrowUp /> 
    </button> 
  ); 
};

export default ScrollButton;