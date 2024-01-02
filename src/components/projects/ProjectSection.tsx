"use client";

import { projects } from "@/models/Projects";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  return (
    <div className="flex items-center justify-center mt-12 overflow-hidden">
      <Carousel
        className="flex items-center justify-center w-[90vw] lg:w-full max-w-3xl"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible lg:visible" />
        <CarouselNext className="invisible lg:visible" />
      </Carousel>
    </div>
  );
};

export default ProjectSection;
