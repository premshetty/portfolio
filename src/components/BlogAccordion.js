import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
const blogChapters = [
  {
    id: 1,
    heading: "The Spark of Passion",
    content:
      "Every great adventure begins with a spark, and mine ignited when I discovered the captivating world of frontend development. The ability to shape digital experiences, breathe life into designs, and connect with users through intuitive interfaces became my driving force. With React as my trusted companion, I embarked on a path that would constantly challenge and inspire me.",
  },
  {
    id: 2,
    heading: "Nurturing Growth",
    content:
      "In this fast-paced industry, growth is not just a desire, but a necessity. I firmly believe in the power of continuous learning and honing my skills. Whether it's diving deep into the latest JavaScript frameworks or exploring new paradigms in UI/UX design, I eagerly embrace every opportunity to expand my knowledge and expertise. The journey of growth is never-ending, and I am thrilled to evolve alongside the ever-changing technology landscape.",
  },
  {
    id: 3,
    heading: "Thriving on Challenges",
    content:
      "Web development is a realm of constant challenges, where problem-solving becomes second nature. From tackling complex bugs to architecting scalable applications, each hurdle presents an opportunity for innovation. I have had the privilege of collaborating with brilliant minds, working in agile environments that foster creativity and encourage collaborative problem-solving. Together, we have forged digital solutions that leave a lasting impact.",
  },
  {
    id: 4,
    heading: "Tales from the Trenches",
    content:
      "As I traversed this vast landscape, I encountered captivating projects that pushed me to new heights. From migrating legacy systems to modern tech stacks, to crafting pixel-perfect landing pages that captivate users, every project has taught me valuable lessons. I've had the pleasure of collaborating with esteemed clients, understanding their needs, and translating their visions into reality. Through my work, I strive to empower users, making their digital experiences seamless and delightful.",
  },
  {
    id: 5,
    heading: "Finding Inspiration Everywhere",
    content:
      "Beyond the lines of code, I find inspiration in the world around me. From nature's harmonious designs to the elegance of architecture, I draw inspiration from diverse sources. This synthesis of creativity and technology fuels my passion, allowing me to infuse unique elements into my work. It's this ability to blend artistry and innovation that brings a touch of magic to every project I undertake.",
  },
];

const BlogAccordion = () => {
  return (
    <div className="md:min-h-screen flex flex-col md:w-1/2 mt-32 mx-auto py-5 md:py-0 px-10">
      <h1
        className="scroll-m-20 pt-5 text-3xl p-10
      text-center md:text-4xl  leading-[2] font-extrabold tracking-wide lg:text-5xl"
      >
        Why I Choose Frontend?
      </h1>
      <Accordion type="multiple" collapsible className="w-full">
        {blogChapters.map(({ content, heading, id }) => {
          return (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger>{heading}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default BlogAccordion;
