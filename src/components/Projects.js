import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { projectsList } from "@/datas/projectData";
import Link from "next/link";
const Projects = () => {
  return (
    <div
      id="projects"
      className="md:min-h-screen flex flex-col  mt-32 mb-10 mx-auto py-5 md:py-0 px-10"
    >
      <h1
        className="scroll-m-20 pt-5 text-3xl p-10
      text-center md:text-4xl  leading-[2] font-extrabold tracking-wide lg:text-5xl
      
      animate-text-color bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
      >
        Projects
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {projectsList.map(({ id, img, title, description, link }) => {
          return (
            <Card className="w-[350px]" key={id}>
              <Link href={link}>
                <Image
                  className="p-3"
                  alt="img"
                  src={img}
                  width={350}
                  height={200}
                />
              </Link>
              <CardHeader>
                <Link href={link}>
                  <CardTitle>{title}</CardTitle>
                </Link>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
