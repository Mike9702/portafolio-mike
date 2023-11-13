import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
 
} from "react-icons/fa";

import {
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "I'll go for the awards",
       
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "The expertise needed to collaborate with the development team",
      },
    ],
  },
  
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-24  text-center  lg:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex absolute w-[400px] h-[300px] bottom-0 right-[10%]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center  lg:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-1  flex-col">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {" "}
            In continuous <span className="text-accent"> learning</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] lg:text-xl mx-auto lg:mx-0 lg:mb-12 px-2 lg:px-0"
          >
            Web Development & Computer Science Student at Academlo, handling the
            most commonly used technologies to meet the most demanded needs in
            application development.
          </motion.p>
          {/* counters */}
          
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full lg:max-w-[50%] h-[480px] items-center py-6 lg:py-8"
        >
          <div className="flex items-center  gap-x-6 lg:gap-x-8 mx-auto lg:mx-0 mb-4 text-sm lg:text-lg ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all  after:duration-300"
                  } cursor-pointer capitalize lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center h-[50px] lg:items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col  max-w-max gap-y-2 items-center text-white/60 "
                >
                  {/* title */}
                  <div className="text-2xl font-light mb-2 md:mb-0 mx-[25px] ">{item.title}</div>
                  
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-5xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
