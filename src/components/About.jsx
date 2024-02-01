import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/data";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; 
import Skills from "./Skills";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        className=" rounded-[20px] py-5 px-12 bg-primary min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
            <img src={icon} alt={title} 
            className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

  const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        "I'm a skilled web developer with some experience working with
        TypeScript and JavaScript, particularly in the usage of frameworks such
        as React and Node.js. I am quick to learn, easily adaptable to any work
        environment or client request, and, above all, I enjoy collaborating in
        a team."
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-14 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <Skills/>
    </>
  );
};

export default SectionWrapper(About, "about");
