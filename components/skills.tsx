"use client"

import React from 'react';
import SectionHeading from "@/components/section-heading";
import { skillsData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({ //This is where the custom does
    opacity: 1,
    y: 0,
    transition: { //This delay makes them appear one per one
      delay: 0.05 * index, //Each value get a little more delay
    },
  }),
};
export default function Skills() {

    const { ref } = useSectionInView("Skills",  0.75);

    return (
        <section
            ref={ref}
            id="skills"
            className="mb-48 max-w-[53rem] scroll-mt-28 text-center sm:mb-48"
        >
            <SectionHeading>My Skills</SectionHeading>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                    <motion.li
                        key={index} className="bg-white borderBlack rounded-xl px-5 py-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                    once: true,
                    }}
                    custom={index} //this custom value adds more delay
                    >
                        {skill}
                    </motion.li>
                ))}


            </ul>

        </section>
    );
}

