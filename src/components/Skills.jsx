import {motion} from 'framer-motion'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion';
import { technologies } from "../constants/data";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc"; 


const variants = {
    hidden: {},
    show: {
        // transition: {
        //     staggerChildren: 2,
        //         delayChildren: 0.1
        // }
    }
}


const SingleSkill = ({tech, index}) => {
    return (
        <Tilt options={{
            max:50,
            speed: 50
        }}>
            <motion.div
            variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
            className='w-28 h-28 rounded-md p-1 mt-1 bg-white bg-opacity-10 shadow-card'
            >
                <img className='w-full h-full block object-contain' src={tech.icon} alt={tech.name} />
                <p className='font-bold text-center mt-1 text-gray-300'>{tech.name}</p>
    
            </motion.div>
            
    
        </Tilt>
    )
}
//!TODO: Envolver en el HOC Este elemento, ay otra cosa, lo que continua es los proyectos

const Skills = () => {
  return (
  <>
      <motion.div variants={textVariant()}>
    <h3 className={`font-bold text-[40px] md:text-[50px]`}>Skills</h3>
    {/* ${styles.sectionHeadText} */}
  </motion.div>

    <motion.div 
    className='flex flex-wrap gap-4 gap-y-10  mt-4'
    options={{
        max:30,
        speed: 50
    }}
    >
        {
            technologies.map((tech, index)=> (
                <SingleSkill
                key={tech.icon} 
                tech={tech} 
                index={index} />
            ))
        }
        

    </motion.div>
  
  </>
    
  )
}

export default SectionWrapper(Skills, '');