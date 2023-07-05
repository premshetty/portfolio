import React from "react";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";
import {
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
  TypeScriptIcon,
  CssIcon,
  ReduxIcon,
  TailWindIcon,
  BabelIcon,
  GithubIcon,
  JestIcon,
  LinuxIcon,
  MUIIcon,
  NextJsIcon,
  VsCodeIcon,
} from "../../svgIcons";
const Skills = () => {
  const SkillList = [
    HtmlIcon,
    JavaScriptIcon,
    ReactIcon,
    TypeScriptIcon,
    CssIcon,
    ReduxIcon,
    TailWindIcon,
    BabelIcon,
    GithubIcon,
    JestIcon,
    LinuxIcon,
    MUIIcon,
    NextJsIcon,
    VsCodeIcon,
  ];
  return (
    <div
      id="skills"
      className="md:min-h-screen w-full py-5   px-10 bg-gradient-to-r bg-opacity-20 from-blue-400 to-red-500"
    >
      <h1 className="scroll-m-20 pt-5 text-3xl text-center md:text-4xl  leading-loose font-extrabold tracking-tight lg:text-5xl">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-1/2 gap-5 mx-auto mt-10">
        {SkillList.map((skill) => {
          return (
            <Card key={skill} className="w-[100px] p-3">
              {skill()}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
