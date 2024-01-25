import {  useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/data";
import { logo, menu, close } from "../assets";
import { NavItem } from "../navbar";




export const Navbar = () => {

  const [isActive, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo Brian"
            className="w-16 h-16 object-contain "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Brian &nbsp;
            <span className="sm:block hidden"> | Dev Web</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
              <NavItem 
              key={link.id}
              link={link} 
              setActive={setActive} 
              active={isActive}
              toggleMenu={toggleMenu}
              setToggleMenu={setToggleMenu}
              />
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={`${toggleMenu ? menu : close}`}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>

        <div
          className={`${
            toggleMenu ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-secondary to-tertiary absolute top-20 right-0 mx-4
            my-2 min-w-[140px] z-10 rounded-xl sm:hidden`}
        >
          <ul 
      
          transition={{duration:2}}
          className="list-none flex  flex-col items-start justify-end gap-4">
            {
            navLinks.map((link) => (
             <NavItem 
             key={link.id}
             link={link} 
             setActive={setActive} 
             active={isActive}
             toggleMenu={toggleMenu}
             setToggleMenu={setToggleMenu}
              />
            ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
