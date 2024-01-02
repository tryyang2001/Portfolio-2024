import { experiences } from "@/models/Experience";
import VisualCard from "./VisualCard";
import { Button, Link } from "@nextui-org/react";
import Icons from "../common/Icons";
import { resumeLink } from "@/models/ResumeLink";

const AboutMeDescription = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-[3.5rem] pb-[5rem]">
      {/* Text Description */}
      <div>
        <h4 className="text-xl lg:text-2xl font-medium underline">
          Information About Me
        </h4>
        <div className="text-justify hyphens-auto leading-6 lg:leading-7 text-clr-grey-1 px-2 lg:px-4 py-2 text-medium lg:text-lg">
          With 3+ years of programming experience, I possess a strong foundation
          in Python, C#, and TypeScript. My expertise extends to full-stack web
          development and RESTful API development.
          <br />
          I have experience in developing web applications using React, NextJS,
          and ExpressJS, with both SQL and NoSQL databases. I also have
          experience in developing high-traffic enterprise-level API services
          from my internship at Autodesk.
          <br />
          Feel free to reach out if you think I am a good fit for your team and
          I am happy to discuss further!
          <div className="flex justify-end my-5">
            <Button
              className="mx-2 bg-clr-secondary text-clr-white font-medium"
              as={Link}
              href={resumeLink}
              target="_blank"
            >
              Download Resume <Icons.ArrowDownToLine />
            </Button>
          </div>
        </div>
      </div>
      {/* Visual Card */}
      <div className="grid grid-cols-2 gap-2 lg:gap-6 px-1 lg:pl-[1.1rem]">
        {experiences.map((experience) => {
          return (
            <VisualCard
              key={experience.field}
              value={experience.value}
              field={experience.field}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeDescription;
