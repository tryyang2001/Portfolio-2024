import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Spacer,
  Link,
} from "@nextui-org/react";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Icons from "../common/Icons";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <CarouselItem>
      <Card className="bg-clr-primary border-clr-grey-4 hover:border-clr-secondary rounded-md transition-all ease-in-out p-4 px-2 mb-2">
        <CardContent>
          <div className="p-0 m-0 bg-slate-900 rounded-lg flex justify-center items-center overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={700}
              height={500}
              as={NextImage}
              className="object-scale-down max-w-[300px] max-h-[300px] min-w-[300px] min-h-[300px] sm:max-w-[550px] sm:min-w-[550px] md:max-w-[700px] sm:max-h-[500px] md:min-w-[700px] sm:min-h-[500px]"
            />
          </div>
        </CardContent>
        <CardHeader className="text-clr-white bg-clr-primary pb-0">
          <Accordion
            className="-mt-8 text-clr-white bg-clr-primary border-clr-grey-4"
            variant="bordered"
            itemClasses={{
              base: "bg-clr-primary",
              title: "text-clr-white text-xl font-semibold",
              subtitle: "text-clr-grey-2",
              content: "text-clr-white text-justify",
            }}
          >
            <AccordionItem
              key={project.title.toLowerCase()}
              aria-label={"Accordion for " + project.title}
              title={project.title}
              subtitle={
                <div>
                  <span className="text-center m-1 mb-6">
                    <Icons.Info className="inline" />
                  </span>{" "}
                  {project.subtitle}
                </div>
              }
            >
              <Divider className="bg-clr-grey-4 mb-2" />
              {project.intro}
              <Spacer y={2} />
              <div className="text-clr-secondary font-semibold">My Role:</div>
              {project.roleDescription}
              <div className="my-2 flex justify-end ">
                <Button
                  as={Link}
                  href={project.githubLink}
                  isIconOnly
                  className="rounded-full"
                >
                  <Icons.Github size={24} />
                </Button>
              </div>
            </AccordionItem>
          </Accordion>
        </CardHeader>
      </Card>
    </CarouselItem>
  );
};

export default ProjectItem;
