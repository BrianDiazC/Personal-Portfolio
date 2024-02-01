import { Experience, Hero } from "../../components";
import { Navbar } from "../../components/Navbar";
import  About  from "../../components/About";
import Skills from "../../components/Skills";
import Works from "../../components/Works";
import Contact from "../../components/Contact";
import StarsCanvas from "../../components/canvas/Stars";

export const Portfolio = () => {
  return (
    <div className="relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
    

        {/* <h1 className="h-screen">sdsdsd</h1> */}
      </div>

  
        <About />
     
     
      {/* <Experience/> */}
      {/* <Tech/> */}
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  );
};
