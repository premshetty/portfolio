import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { experienceList } from "@/datas/experienceData";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
const Experience = () => {
  return (
    <div
      id="experience"
      className="md:min-h-screen w-full py-5 from-zinc-600 to-rose-800  px-10 bg-gradient-to-br dark:from-sky-300 dark:to-rose-400"
    >
      <h1
        className="scroll-m-20 pt-5 text-3xl
      text-white dark:text-black text-center md:text-4xl  leading-loose font-extrabold tracking-wide lg:text-5xl
      "
      >
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 my-10">
        {experienceList.map(
          ({ companyName, id, location, logo, period, position, skills }) => (
            <Card className="" key={id}>
              <CardHeader>
                <div className="mb-5">
                  <CardTitle>{position}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-3">{period}</p>
                </div>

                <Card className="flex justify-between items-center  p-4">
                  <CardDescription>{companyName}</CardDescription>
                  <Image
                    alt={companyName}
                    src={logo}
                    width={100}
                    height={100}
                  />
                </Card>
              </CardHeader>
              <CardContent className="">
                <div className="flex gap-2 items-center">
                  <MapPin className="opacity-30" />
                  <p className="text-sm text-muted-foreground">{location}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {skills.map((skill) => (
                    <Card
                      className=" h-10 flex  justify-center items-center p-2 text-xs md:text-base whitespace-nowrap overflow-hidden text-clip"
                      key={skill}
                    >
                      {skill}
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
