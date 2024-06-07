import React, {Fragment, useRef} from 'react'
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";

export default function Projects() {
    return (
        <section id="projects">
            <SectionHeading>My projects
            </SectionHeading>

            <div>
                {
                projectsData.map((project, index) => (
                <Fragment key={index}>

                <Project {...project}/>
                </Fragment>



                ))
                }
            </div>

        </section>
    )
}
