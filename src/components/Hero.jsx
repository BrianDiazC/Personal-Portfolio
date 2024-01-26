import {motion, useTransform} from "framer-motion"
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { HeroMenu } from "./hero/HeroMenu";

import { useScroll } from "framer-motion"
import { useRef } from "react";
import { Tilt } from "react-tilt";




// import {ComputerCanvas}  from './canvas'

export const Hero = () => {



  const scrollAnimatonRef = useRef();
  const {scrollYProgress} = useScroll({
    target: scrollAnimatonRef,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  console.log(scrollYProgress)

  const variants = {
    visible: { 
      opacity: 1,
      scale:1,
      y: 0,
     },
     
    hidden: { 
      y: -100,
      scale: 0.5,
      opacity: 0,
     },
  
  }
  return (

    <section className={`relative w-full h-screen mx-auto overflow-x-hidden`}>
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
          transition={{duration:1}}
           variants={variants}
          className={`${styles.heroHeadText}text-white`}>Hi, I'm 
          <span className="text-tertiary"> Brian</span>
          </motion.h1>
       
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I am a telematics engineer, passionate 
        <br className="sm:block hidden" />
        about programming and web development.
        </p>

    
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{duration:1}}
          variants={variants}
        className="p-5 shadow-md mt-4 ">
              <Tilt 
          options={{
            max: 25,
            scale: 1,
            speed: 50,
          }}
        >
          <img 

          className="rounded-xl object-contain w-full max-w-screen-md block "
          src="../../src/assets/heroImage.jpg" alt="hero Image" />
           </Tilt>
        </motion.div>
       

        </div>

        <HeroMenu/>

        <motion.div 
           ref={scrollAnimatonRef}
           style={{opacity}}
        
        className="absolute xs:bottom-10 sm:bottom-5 inset-x-auto left-0 right-0 mx-auto bottom-32 w-1/2 flex justify-center items-center">
          <a href="#about">
            <div 
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center
            items-start p-2">
              <motion.div 
                animate={{
                  y:[0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                
                className="w-3 h-3 rounded-full bg-secondary mb-1 "
              />

            </div>

          </a>
          
        </motion.div> 

       

      </div>
    </section>
  
  );
};


