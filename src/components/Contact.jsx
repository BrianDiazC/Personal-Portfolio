import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import SpaceCraft from "./canvas/SpaceCraft";
import SpaceCraftCanvas from "./canvas/SpaceCraft";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(lHAJbe7wk-WV_Ebu4, template_ngyliug, service_t5p9ron);
  };

  return (
    <div className="xl:mt-12 xl:flex-row xl:justify-between flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.7] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white bg-opacity-15 py-4 px-6 placeholder:text-gray-300
          text-white rounded-lg outline-none border-none font font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white bg-opacity-15 py-4 px-6 placeholder:text-gray-300
          text-white rounded-lg outline-none border-none font font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-white bg-opacity-15 py-4 px-6 placeholder:text-gray-300
          text-white rounded-lg outline-none border-none font font-medium"
            />
          </label>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="submit"
            className="bg-tertiary hover:bg-opacity-80 py-3 px-10 outline-none w-fit text-white font-bold 
             rounded-xl shadow-md shadow-primary mx-auto"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] xl:w-full"
      >
        <SpaceCraftCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
