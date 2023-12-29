import { SkillCategory, skills } from "@/models/Skills";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

interface Props {}

const SkillTableSection = ({}: Props) => {
  const categoryOrder = [
    SkillCategory.ProgrammingLanguage,
    SkillCategory.Database,
    SkillCategory.WebDevelopment,
    SkillCategory.MachineLearning,
    SkillCategory.Other,
  ];

  return (
    <div className="pb-[4rem]">
      <h4 className="text-2xl uppercase text-center relative pb-5 font-medium small-title">
        My Skills
      </h4>
      <div>
        {categoryOrder.map((category) => {
          const [categoryFirstName, categoryLastName] = category.split(
            /\s(.+)/,
            2
          );

          const sameCategorySkills = skills.filter(
            (skill) => skill.category === category
          );

          return (
            <div className="mb-4 mx-2" key={category}>
              <h4 className="font-medium text-xl mb-2">
                {categoryFirstName}{" "}
                <span className="text-clr-secondary">{categoryLastName}</span>
              </h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border border-clr-grey-0">
                {sameCategorySkills.map((skill) => {
                  return (
                    <figure
                      className="flex flex-col items-center justify-center m-4"
                      key={skill.name}
                    >
                      <Image
                        alt={skill.name}
                        src={skill.logo}
                        width={50}
                        height={50}
                        className="bg-clr-bg-icon rounded-[20%] p-[1%] max-w-[50px] max-h-[50px]"
                        as={NextImage}
                      />
                      <figcaption className="mt-1 text-xs xl:text-sm ">
                        {skill.name}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillTableSection;
