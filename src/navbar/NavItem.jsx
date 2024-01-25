import { motion } from "framer-motion";
import React from "react";


export const NavItem =  React.memo(({
  link,
  isActive,
  setActive,
  toggleMenu,
  setToggleMenu,
}) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      key={link.id}
      className={`${isActive === link.id ? "text-secondary" : "text-white"}
       hover:text-tertiary hover:font-medium hover:cursor-pointer font-poppins font-medium cursor-pointer text-[16px]`}
      onClick={() => {
        setActive(link.id);
        setToggleMenu(!toggleMenu);
      }}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </motion.li>
  );
});
