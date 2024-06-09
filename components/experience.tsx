"use client"

import  React, { Fragment } from 'react';
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiencesData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

export default function Experience() {

    const { ref, inView } = useSectionInView("Experience",  0.20);


    return (
        <section ref={ref} id="experience">
            <SectionHeading>
                My Experience
            </SectionHeading>

            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index) => (
                        <Fragment key={index}>
                            <VerticalTimelineElement
                                visible={inView}
                             contentStyle={{
                                 background: "#f3f4f6",
                                 boxShadow: "none",
                                 border: "1px solid rgba(0, 0, 0, 0.05)",
                                 textAlign: "left",
                                 padding: "",

                             }}
                             contentArrowStyle={{
                                 borderRight: "0.4rem solid #9ca3af"
                             }}
                             date={item.date}
                             icon={item.icon}
                             iconStyle={{
                                 background: "white",
                                 fontSize: "1.5rem",
                             }}>
                                <h3 className="font-semibold capitalize">{item.title} - {item.company}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700">
                                    {item.description}
                                </p>

                            </VerticalTimelineElement>
                        </Fragment>
                    ))
                }
            </VerticalTimeline>

        </section>
    );
}

