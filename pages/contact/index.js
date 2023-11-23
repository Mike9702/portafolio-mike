//form emailjs
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irbyo9i",
        "template_ouvxm8j",
        form.current,
        "1FW8Ac-doqCsms4mc"
      )
      .then(
        (result) => {
          alert("tu mensaje ha sido enviado, me contactaré contigo lo mas pronto posible");
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:h2 text-center mb-6 xl:mb-12 "
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form} onSubmit={sendEmail}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" name="user_name" placeholder="name" autoComplete="off" className="input" />
              <input type="email"name="user_email" placeholder="email" autoComplete="off" className="input" />
            </div>
            <textarea placeholder="message" name="message" className="textarea"></textarea>
            <button type="submit" value="Send" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all divide-blue-300 absolute text-[22px]" />
            </button>
           
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
