import {motion} from "framer-motion"
import { styles } from "../styles";

// import {ComputerCanvas}  from './canvas'

export const Hero = () => {
  const variants = {
    visible: { 
      opacity: 1,
      scale:1,
     },
     
    hidden: { 
      scale: 0.5,
      opacity: 0,
     },
  
  }
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-secondary"/>
            <div className="w-1 sm:h-80 h-40 secondary-gradient "/>
        </div>

        <div>
          <motion.h1 
          initial="hidden"
          animate="visible"
          transition={{duration:0.8}}
           variants={variants}
          className={`${styles.heroHeadText}text-white`}>Hi, I'm 
          <span className="text-tertiary"> Brian</span>
          </motion.h1>
       
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I

        </p>
        </div>

      </div>
    </section>
  );
};


