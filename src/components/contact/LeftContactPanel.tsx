import { Button, Link, Spacer, Tooltip } from "@nextui-org/react";
import Icons from "../common/Icons";
import { personalInformation } from "@/models/PersonalInformation";
import Information from "./Information";

interface Props {}

const LeftContactPanel = ({}: Props) => {
  return (
    <div>
      <div className="flex-[2.5] text-medium lg:text-lg">
        <h4 className="uppercase font-medium mt-4 text-2xl lg:text-3xl text-center lg:text-left">
          Contact Information
        </h4>
        <p className="my-4 mx-2 lg:mx-0 leading-8 text-justify">
          Hi there, if you have any question or want to know more about me,
          please do not hesitate to email me here!
        </p>
        <div className="contact-info">
          {personalInformation.map((info, index) => {
            return <Information personalInfo={info} key={index} />;
          })}
        </div>

        <div className="mt-8">
          <h4 className="uppercase font-medium mt-4 text-2xl lg:text-3xl text-center lg:text-left">
            Other Websites
          </h4>
          <div className="flex gap-4 items-center justify-center lg:justify-start mt-4">
            <Tooltip
              content="Linkedin"
              showArrow
              placement="bottom"
              className="bg-clr-grey-5 text-clr-white"
            >
              <Button
                href="https://www.linkedin.com/in/tanruiyang-nus"
                target="_blank"
                as={Link}
                className="rounded-full text-xl bg-black text-white"
                isIconOnly
              >
                <Icons.Linkedin />
              </Button>
            </Tooltip>
            <Tooltip
              content="Github"
              showArrow
              placement="bottom"
              className="bg-clr-grey-5 text-clr-white"
            >
              <Button
                href="https://github.com/tryyang2001"
                target="_blank"
                as={Link}
                className="rounded-full text-xl bg-black text-white"
                isIconOnly
              >
                <Icons.Github />
              </Button>
            </Tooltip>
            <Tooltip
              content="Resume"
              showArrow
              placement="bottom"
              className="bg-clr-grey-5 text-clr-white"
            >
              <Button
                href="https://drive.google.com/file/d/1wanGfOQJ1g48wF_NHP605LgSwqPvzLDu/view?usp=sharing"
                target="_blank"
                as={Link}
                className="rounded-full text-xl bg-black text-white"
                isIconOnly
              >
                <Icons.Pdf />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContactPanel;
