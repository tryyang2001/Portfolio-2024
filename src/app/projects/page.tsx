import PageTitle from "@/components/common/PageTitle";
import ProjectSection from "@/components/projects/ProjectSection";
import { Spacer } from "@nextui-org/react";

interface Props {}

const page = ({}: Props) => {
  return (
    <div className="min-h-screen lg:px-32 xl:px-64">
      <PageTitle>
        My <span className="text-clr-secondary">Projects</span>
      </PageTitle>
      <p className="m-6 text-justify text-medium leading-6 lg:leading-7 lg:text-lg">
        Here are featured projects I've collaborated on, with others not listed
        too. My strength lies in seamlessly integrating into diverse teams and
        adapting swiftly to new environments. Most of the showcased projects
        were team efforts, where I've outlined my contributions. There are more
        ongoing projects which will be updated upon completion.
      </p>

      {/* projects */}
      <ProjectSection />
      <Spacer y={8} />
    </div>
  );
};

export default page;
