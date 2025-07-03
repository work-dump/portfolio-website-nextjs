"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate{" "}
        <span className="font-medium">AI/ML Engineer</span>
        with 7+ years of hands-on experience transforming complex data 
        into intelligent solutions that drive real business impact. 
        Spanning computer vision systems, NLP applications, and generative 
        AI solutions, I thrive on tackling challenging problems 
        at the intersection of cutting-edge technology and practical 
        applications
      </p>
      <p>
        I love {" "}
        <span className="italic">challenges</span> and learning from them.{" "}
        <span className="font-medium">
          Let's build something together!
        </span>
      </p>
    </motion.section>
  );
};

export default About;
