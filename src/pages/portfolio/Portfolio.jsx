import { Experience, Hero } from "../../components"
import { Navbar } from "../../components/Navbar"






export const Portfolio = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      {/* <About/> */}
      {/* <Experience/> */}
      {/* <Tech/> */}
      {/* <Works/> */}
      {/* <Feedbacks/> */}
      <div className="relative z-0">
          {/* <Contact/> */}
          {/* <StarsCanvas/> */}
      </div>


    </div>
  )
}
