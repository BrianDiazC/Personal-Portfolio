import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

const icons = [
  {
   icon: <IoLogoLinkedin size={30} />,
   href: 'https://www.linkedin.com/feed/'
},
  {
    icon:<IoLogoGithub size={30} />,
    href: 'https://github.com/BrianDiazC'
  },
 {
    icon:  <IoLogoInstagram size={30} />,
    href: ''
 },
];

export const HeroMenu = () => {
  return (
    <div className="   flex w-16 flex-col items-center space-y-10 py-6 fixed inset-y-1/2 right-0 ">
      <div className="space-y-48 rounded-md bg-tertiary ">
        <ul>
          {icons.map((icon, index) => (
            <motion.li
              key={icon.href}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              className="p-3 cursor-pointer"
            >
              <a href={icon.href} target="_blank">{icon.icon}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
