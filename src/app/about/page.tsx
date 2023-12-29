import AboutMeDescription from "@/components/about/AboutMeDescription";
import SkillTableSection from "@/components/about/SkillTableSection";
import WorkExperienceSection from "@/components/about/WorkExperienceSection";
import PageTitle from "@/components/common/PageTitle";

interface Props {}

const page = ({}: Props) => {
  return (
    <div className="min-h-screen lg:px-32 xl:px-64 ">
      {/* Page Title */}
      <PageTitle>
        About <span className="text-clr-secondary">Me</span>
      </PageTitle>

      {/* About Me Description */}
      <AboutMeDescription />

      {/* Skills */}
      <SkillTableSection />

      {/* Work Experience */}
      <WorkExperienceSection />
    </div>
  );
};

export default page;
