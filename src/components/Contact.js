import React, { useState, useTransition } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setisLoadin] = useState(false)
  const { toast } = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoadin(true)
    // Perform form validation

    // Create an API request to your backend endpoint to send the email
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting Me!",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "An error occurred while sending the message. Please try again later.",
        variant: "destructive",
      });
    }

    setName('')
    setEmail('')
    setMessage('')
    setisLoadin(false)
  };
  return (<>
    <Toaster />
    <div
      id="contact"
      className="min-h-screen flex flex-col  mt-10     mx-auto py-5 md:py-0 px-10"
    >
      <h1
        className="scroll-m-20 pt-5 text-3xl p-10
      text-center md:text-4xl  leading-[2] font-extrabold tracking-wide lg:text-5xl
      
      animate-text-color bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
      >
        Get in touch
      </h1>
      <form className="h-full p-5 flex flex-col gap-5 md:p-10  w-full md:w-3/4 lg:w-1/2 mx-auto">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-[200px]"
          name="message"
          placeholder="Type your message here."
        />
        <Button
          onClick={handleSubmit}
          className="bg-green-500"
          variant="secondary"
        >
          {isLoading ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
      <div className="flex gap-3 justify-center items-center w-full md:w-3/4 lg:w-1/2 mx-auto my-10">
        <Link about="blank" href="https://www.linkedin.com/m/in/premreact">
          <Card className="p-3">
            <LinkedinIcon />
          </Card>
        </Link>
        <Link href="https://github.com/premshetty">
          <Card className="p-3">
            <GithubIcon />
          </Card>
        </Link>
        <Link href="https://dev.to/prems5">
          <Card className="p-3">
            <Image alt="dev.to" src="/dev.png" width={24} height={24} />
          </Card>
        </Link>
      </div>
    </div>
  </>
  );
};

export default Contact;
