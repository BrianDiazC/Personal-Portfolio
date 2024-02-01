import { IoDownload } from "react-icons/io5";
import { motion } from "framer-motion";

export const CVButtom = () => {
  return (
    <div 
    className=" absolute w-24 h-16 inset-0 top-3/4 lg:top-1/2 lg:left-3/4 left-0 right-0 mx-auto shadow-xl">
      <a href="/portfolio/CV" target="_blank">
        <motion.button 
        whileTap={{scale: 0.8}}
        className=" text-lg sm:mt-5 lg:mt-0 cursor-pointer group relative flex gap-1.5 px-8 p-3  bg-tertiary items-center rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          CV
          <IoDownload size={30} height={30} />
        </motion.button>
      </a>
    </div>
  );
};
