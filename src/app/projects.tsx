"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/trading.jpg",
    title: "iLEVEL Portfolio Monitoring Software",
    desc: `iLEVEL is the transformational solution that brings new transparency and insight to alternative investment portfolios.
      As the core of our private market solutions, iLEVEL helps general partners and limited partners streamline data collection, portfolio monitoring, analytics, valuation, and reporting.
      Manage the flow of data and create a single source of truth to make informed decisions and communicate transparently with investors, auditors, boards and other stakeholders.`,
  },
  {
    img: "/image/nowoptics.jpg",
    title: "Now Optics",
    desc: `Now Optics are leaders in the eye health industry. Now Optics Tech is designed with a mobile-first approach, 
      ensuring a responsive and visually appealing experience across various devices.
      Developers can create a seamless user interface that adapts to desktops, tablets, and smartphones, 
      capturing potential customers wherever they are. This flexibility is crucial in catering to the diverse preferences 
      of today's tech-savvy consumers.`,
  },
  {
    img: "/image/ssc.jpg",
    title: "SSC (Staff Selection Commission)",
    desc: "Staff Selection Commission (SSC) is an organisation under Government of India to recruit staff for various posts in the various ministries and departments of the government of India and in subordinate offices.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography placeholder = "" variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          placeholder = "" 
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
