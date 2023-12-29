import Link from "next/link";
import Icons from "../common/Icons";
import { Spacer } from "@nextui-org/react";

interface Props {}

const WorkExperienceSection = ({}: Props) => {
  return (
    <div>
      <h4 className="text-2xl uppercase text-center relative -mt-5 pb-5 font-medium small-title">
        Work Experience
      </h4>

      <div className="grid grid-cols-1 gap-8 pb-12 mx-2 pl-4 lg:pl-0">
        <div className="relative pl-8 lg:pl-12 border-l border-l-clr-grey-5 ml-2">
          <div className="absolute -left-[27px] bg-clr-secondary top-0 w-[50px] h-[50px] rounded-full flex items-center justify-center">
            <Icons.Projects />
          </div>
          <p className="py-[0.2rem] mb-2 px-3 bg-clr-grey-5 rounded-full inline-block uppercase font-medium text-[0.8rem]">
            Jan 2023 - Jul 2023
          </p>
          <h5 className="pb-4 pt-0 uppercase text-lg font-semibold">
            Software Engineer Intern{" "}
            <span className="text-clr-grey-2 font-medium text-[0.9rem]">
              At{" "}
              <Link
                href="https://asean.autodesk.com/"
                target="_blank"
                className="hover:underline hover:text-clr-grey-3"
              >
                Autodesk
              </Link>
            </span>
          </h5>
          <p className="text-justify text-clr-grey-1 text-medium lg:text-lg leading-6 lg:leading-7 -ml-4 mx-2 lg:mx-0">
            Autodesk is a software company that provides services for
            engineering, construction, architecture, and media entertainment. I
            joined Autodesk under the Forge Data Management (ForgeDM) API team.
            ForgeDM is a cloud API that provides data management services across
            multiple Autodesk products such as BIM360, Fusion360, and AutoCAD.
            <Spacer y={1} />
            During the internship, I helped the team upgrade multiple
            dependencies of ForgeDM API, as well as resolving client issues and
            bugs, and conduct weekly service review to ensure the quality of the
            API.
            <Spacer y={1} />
            There are a lot of things that I learned during the internship, such
            as gaining technical expertise for software testing and API
            development, delivering high-quality service to high-traffic
            production API, and working in a team with Agile methodology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
