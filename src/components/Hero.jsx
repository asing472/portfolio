import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa'

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { photo } from '../assets'


const socials = [
  {icon: <FaBehance />, path: 'https://www.behance.net/akashsingh24'},
  {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/07aks/'},
  {icon: <FaGithub />, path: 'https://github.com/asing472/'},
  {icon: <FaInstagram />, path: 'https://www.instagram.com/the_meticulous_guy/'}
]
// eslint-disable-next-line react/prop-types
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a 
          key={index} 
          href={item.path} 
          className={iconStyles} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const Photo = () => {

  return (
    <div className="relative w-[260px] h-[260px] lg:w-[240px] lg:h-[240px] mx-auto">
      {/* Photo */}
      <motion.img
        src={photo}
        alt="photo"
        className='object-contain rounded-full p-7'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      />
      
      {/* Animated Circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 520 520" // Increased viewBox size
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="260" // Half of the viewBox width/height
          cy="260" // Half of the viewBox width/height
          r="240" // Reduced from 250 to allow for stroke width
          stroke="#915EFF"
          strokeWidth="6"
          strokeDasharray="7 30 40 30"
          // animate={{
          //   strokeDashoffset: [0, -200],
          // }}
          // transition={{
          //   duration: 3,
          //   repeat: Infinity,
          //   ease: "linear",
          // }}
        />
      </motion.svg>
    </div>
  );
};

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section id="about" className={`relative w-full ${isMobile ? "h-screen" : "h-screen"} mx-auto`}>
      <div
        className={`absolute inset-0 ${isMobile? "top-[90px]" : "top-[120px]"} max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        <div className={`flex items-center justify-between ${isMobile ? "flex-col space-y-14" : "flex-row space-x-40"}`}>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className='text-[#915EFF]'>Akash</span>
            </h1>
            <p className={`text-[16px] mt-2 text-gray-300 font-mono`}>
            designing intuitive experiences by day and running the <br className='sm:block hidden' />
            world by night. When I’m not creating, you’ll find me  <br className='sm:block hidden' />
            in my garden or trekking new trails.
            </p>
            <Social containerStyles="flex gap-6 mt-10 relative z-10" iconStyles={`${isMobile ? "w-10 h-10 text-2xl" : "w-10 h-10 text-2xl"} rounded-lg bg-opacity-10 bg-slate-300 flex justify-center items-center text-white hover:bg-[#915EFF] hover:text-black cursor-pointer`}/>
          </div>
          <div>
            <Photo/>
          </div>
        </div>
      </div>

      {!isMobile&&<ComputersCanvas />}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#projects'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero