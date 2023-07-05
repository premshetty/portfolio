import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prem Kumar</title>
      </Head>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 h-[85vh] items-center flex-col md:flex-row mt-10 justify-between  w-full">
        <div className="px-10">
          <h1 className="scroll-m-20 text-3xl md:text-4xl max-w-[500px] leading-loose font-extrabold tracking-tight lg:text-7xl">
            Welcome to{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
              {` Prem Kumar's`}
            </span>{" "}
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[450px] mt-4 leading-loose">
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
    </div>
  );
}
