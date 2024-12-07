import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Pill = ({ text }) => {
  return (
    <div className="inline-block px-6 py-2 mt-4 bg-blue-800 text-blue-100 font-medium rounded-full transition-all">
      {text}
    </div>
  );
};


const ProjectCard = ({ index, name, sub_name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="cursor-pointer" onClick={() => window.open("https://www.behance.net/gallery/195917103/Brand-Identity-Design-MINATURE", "_blank")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
            rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <Pill text={sub_name} />
          <p className="mt-4 text-secondary text-[14px] font-sans">
            {description}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")