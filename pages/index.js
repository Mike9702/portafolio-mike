// next image
import Image from "next/image";
import Avatar from "../components/Avatar";


// comoponents
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";


// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";


const Home = () => {
  return (
    <div className="bg-primary/60 h-full flex transition-all duration-300">
       {/* particles */}
       <ParticlesContainer />
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-24 lg:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Web developer junior <br />
            <span className="text-accent">Full Stack</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-16 lg:text-xl"
          >
            I'm ready to create your website 
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative "
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        
      </div>
      {/* image */}
      <div className=" hidden xl:flex absolute  w-[70%] h-full  right-0 bottom-0 ">
        {/* bg image */}
        <div className=" bg-none  xl:bg-explosion xl:bg-cover xl:bg-right xl-bg-no-repeat w-full h-full absolute mix-blend-color-dodge "></div>
         
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden xl:flex w-full h-full max-w-[537px] max-h-[478px] absolute xl:bottom-0 right-0  xl:right-[2px]"
        >
          <Avatar />
          
        </motion.div>
      
      </div>
        
    </div>
  );
};

export default Home;
