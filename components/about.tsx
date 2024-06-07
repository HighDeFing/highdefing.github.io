"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function About() {

  return (
      <motion.section
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.175}}
          id="about"
      >
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
              I have a <span className="font-medium">Bachelors degree in Computer Science</span> from <span className="italic">Universidad Central
              de Venezuela</span> and I'm currently pursuing a <span className="font-medium">Masters degree in Computer Science</span> at <span className="italic">Florida International University</span>. {" "}
              I'm an enthusiast in <span className="italic">Machine Learning, Data Science and Cloud Computing</span>,
              doing research and courses on the subjects {" "}
              I have worked as a <span className="font-medium">Software Engineer</span> mostly focused on development on {" "}
              <span className="italic">Web Applications</span>.

          </p>

          <p className="mb-3">
              My core Programming Languages are: {" "}
              <span className="font-medium">
             Python, C++, Javascript, SQL.
            </span> {" "}
          </p>

          <p className="mb-3">
              My core Technologies are: {" "}
              <span className="font-medium">
             Git, Next.js (React), mongoDB, Docker, PowerBI.
            </span> {" "}

          </p>

          <p className="mb-3">
              I am also familiar with <span className="font-medium">TypeScript</span>. And currently hold <a href="https://www.credly.com/badges/30b4cecf-e0d0-47d3-90bc-7cf2bbfdcf90/linked_in_profile" target="_blank" className="underline">AWS Certified Cloud Practitioner</a> certificate {" "}
              I am currently looking for a{" "} <span className="font-medium">full-time position</span> as a software
              developer especially in Cloud Computing.
          </p>

          <p>
              <span className="italic">I speak two languages</span>, <span className="font-medium">English and Spanish</span>,
              but also have a intermediate level in <span className="font-medium">German</span>. I also have passion a passion in <span className="italic">Data Mining and Artificial Intelligence (AI)</span>.


          </p>
      </motion.section>
);
}