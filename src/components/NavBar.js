import * as React from "react";
import { Moon, Sun, AlignJustify, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const { setTheme, theme } = useTheme();
  const [show, setShow] = React.useState(false);
  console.log(theme);
  return (
    <div className="px-3 py-2 w-full m-auto flex justify-between items-center">
      <Link href={"/"}>
        <Image src="/logo_transparent.png" width={30} height={30} alt="" />
      </Link>
      <div className="hidden md:flex items-center">
        <Button variant="link">
          <Link href={"/"}> Home</Link>
        </Button>
        <Link href="#contact">
          <Button variant="link">Contact</Button>
        </Link>
        <Button variant="link">
          <Link href="#skills"> Skills</Link>
        </Button>
        <Link href="#experience">
          <Button variant="link">Experience</Button>
        </Link>
        <Link href="#projects">
          <Button variant="link">Projects</Button>
        </Link>
      </div>
      {show && (
        <div className="absolute top-0 z-20 p-5 left-0 h-full  flex flex-col gap-6 w-full bg-background md:hidden items-center">
          <X
            onClick={() => setShow(!show)}
            className="h-8 w-8 right-3 absolute"
          />
          <Button className="mt-5" variant="link">
            <Link href={"/"}> Home</Link>
          </Button>
          <Link href="#contact">
            <Button variant="link">Contact</Button>
          </Link>
          <Button variant="link">
            <Link href="#skills"> Skills</Link>
          </Button>
          <Link href="#experience">
            <Button variant="link">Experience</Button>
          </Link>
          <Link href="#projects">
            <Button variant="link">Projects</Button>
          </Link>
        </div>
      )}
      <div className="flex gap-4 items-center flex-row-reverse">
        <AlignJustify
          onClick={() => setShow(!show)}
          className="h-8 w-8 md:hidden"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
