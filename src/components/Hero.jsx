import { useState, useEffect } from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { photo } from '../assets'


const Photo = () => {

  return (
    <div className="relative w-[240px] h-[240px] xl:w-[240px] xl:h-[240px] mx-auto">
      {/* Photo */}
      <motion.img
        src={photo}
        alt="photo"
        className='object-contain rounded-full p-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      />
      
      {/* Animated Circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 500 500" // Increased viewBox size
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250" // Center of the viewBox (half of width)
          cy="250" // Center of the viewBox (half of height)
          r="250" // Radius (ensures no clipping with stroke width)
          stroke="#915EFF"
          strokeWidth="6" // Match this to your design
          strokeDasharray="5 30 50 30" // 1px dot, 10px gap, 15px dash, 10px gap
          animate={{
            strokeDashoffset: [0, -200], // Moves the pattern along the circle
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
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
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        <div className={`flex items-center justify-between ${isMobile ? "flex-col -space-x-10 space-y-14" : "flex-row space-x-40"}`}>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Akash</span>
            </h1>
            <p className={`text-[22px] mt-2 text-gray-200`}>
            designing intuitive experiences by day and running the <br className='sm:block hidden' />
            world by night. When I’m not creating, you’ll find me  <br className='sm:block hidden' />
            in my garden or trekking new trails.”
            </p>
          </div>
          <div>
            <Photo/>
          </div>
        </div>
      </div>

      <ComputersCanvas />

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

export default Hero;