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
      className="md:min-h-screen w-full py-5 from-zinc-600 to-rose-800  px-10 bg-gradient-to-br dark:from-sky-300 dark:to-rose-400"
    >
      <h1
        className="scroll-m-20 pt-5 text-3xl
      text-white dark:text-black text-center md:text-4xl  leading-loose font-extrabold tracking-wide lg:text-5xl
      "
      >
        Skills
      </h1>
      <div className="md:grid flex flex-wrap justify-center md:grid-cols-3 lg:grid-cols-4 md:w-1/2 gap-5 mx-auto mt-10">
        {SkillList.map((skill) => {
          return (
            <Card key={skill} className="w-[50px] md:w-[100px] p-3">
              {skill()}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
