import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import Skills from "@/components/Skills";
import BlogAccordion from "@/components/BlogAccordion";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prem Kumar</title>
      </Head>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 h-[92vh] items-center flex-col md:flex-row mt-10 justify-between  w-full">
        <div className="px-10">
          <h1 className="scroll-m-20 text-3xl md:text-4xl md:max-w-[500px] md:leading-loose font-extrabold tracking-widest md:tracking-tight lg:text-7xl">
            Welcome to{" "}
            <span className="font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
              {` Prem Kumar's`}
            </span>{" "}
            Portfolio
          </h1>
          <p className="text-lg block md:text-xl text-muted-foreground max-w-[450px] mt-4 leading-loose">
            Passionate and Experienced Frontend React Developer
          </p>
        </div>
        <Image
          alt="home"
          src="/computer.png"
          width={700}
          height={400}
          className="w-auto h-full object-cover"
        />
      </div>
      <Skills />
      <BlogAccordion />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
