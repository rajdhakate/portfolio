"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavasciptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import SwiftIcon from "@/assets/icons/swift.svg";
import PythonIcon from "@/assets/icons/python.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import MacOSIcon from "@/assets/icons/macos.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const toolboxItems = [
  {
    title: "Apple",
    iconType: AppleIcon,
  },
  {
    title: "Swift",
    iconType: SwiftIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavasciptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    title: "MacOS",
    iconType: MacOSIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "55%",
    top: "10%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏼",
    left: "40%",
    top: "40%",
  },
  {
    title: "Pingpong",
    emoji: "🏓",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "72%",
    top: "48%",
  },
  {
    title: "Trekking",
    emoji: "🏔️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cooking",
    emoji: "🥘",
    left: "50%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-20 lg:py-28" id="aboutme">
      <div className="container">
        <SectionHeader
          eyeBrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <Link href="https://www.thriftbooks.com/a/amish-tripathi/266190/?srsltid=AfmBOoq5_MJ_zlkOj_8cuGfaMGnrHD5HS4sZpuR71IzGEL_OelO95DFi">
                <div className="">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Link>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the tech I use to craft my digital experiences"
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the coding world"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-semibold text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <Link href="https://www.google.com/maps/search/?api=1&query=noida">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />

                  <Image
                    src={smileMemoji}
                    alt="Smile Memoji"
                    className="size-20"
                  />
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
