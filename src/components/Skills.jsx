import {motion} from 'framer-motion'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion';
import { technologies } from "../constants/data";
import { Tilt } from 'react-tilt';

const variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 2,
                delayChildren: 0.1
        }
    }
}


const SingleSkill = ({tech, index}) => {
    return (
        <Tilt options={{
            max:40,
            speed: 50
        }}>
            <motion.div
            variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
            className='w-36 '
            >
                <img src={tech.icon} alt={tech.name} />

                <div>
                    <p className='font-bold text-center '>{tech.name}</p>
                </div>

            </motion.div>
            
    
        </Tilt>
    )
}
//!TODO: Envolver en el HOC Este elemento, ay otra cosa, lo que continua es los proyectos

const Skills = () => {
  return (
  <>
      <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Skills</h2>
  </motion.div>

    <motion.div 
    initial="hidden"
    variants={variants}
    whileInView={'show'}
    viewport={{amount:0.50}}

    className='flex flex-wrap gap-4 mt-4'
    options={{
        max:30,
        speed: 50
        
    }}
    >
        {
            technologies.map((tech, index)=> (
                <SingleSkill tech={tech} index={index} />
            ))
        }
        

    </motion.div>
  
  </>
    
  )
}

export default Skills