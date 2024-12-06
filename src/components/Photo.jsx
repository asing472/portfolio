import { photo } from '../assets'

const Photo = () => {
  return (
      <div className="w-full h-full relative">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.35, duration: 0.4, ease: 'easeIn'}}}>
              <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: 'easeInOut'}}} 
                className="w-[100px] h-[100px] xl:w-[180px] xl:h-[180px] mix-blend-lighten absolute">
                  <img
                      src={photo}
                      priority
                      quality={100}
                      fill
                      alt="photo"
                      className="object-contain"
                  />
              </motion.div>
              <motion.svg
                className="w-[120px] h-[120px] xl:w-[220px] xl:h-[220px]" 
                fill="transparent" 
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg" 
              >
                <motion.circle 
                  cx="90" 
                  cy="90" 
                  r="105" 
                  stroke="#D58B88" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 46 52", "4 120 22 22"],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
          </motion.div>
      </div>
  )
}

export default Photo;