import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/data";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.4 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white bg-opacity-10 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="bg-primary h-10 rounded-lg hover:bg-opacity-80 cursor-pointer shadow-xl"
            >
              <a href="#">
                <IoLogoGithub size={40} />
              </a>
            </motion.div>

          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-gray-200 text-[14px]">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            project.tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          The following Projects show a part of my skills and personal
          experience, developing web applications for daily use, which solve
          different problems. Here I briefly describe what it consists of and
          what technologies they use. In the upper right corner you will find
          the link that will take you to the repository of each of these
          projects, in case you are interested in more information about them.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
