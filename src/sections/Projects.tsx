import selfPortfolioPage from "@/assets/images/self-portfolio-page.png";
import smartformsPage from "@/assets/images/smartforms.png";
import graphyPage from "@/assets/images/graphy-page.png";
import nextLevelPage from "@/assets/images/next-level-page.png";
import oktestedPage from "@/assets/images/oktested-page.png";
import youmarkPage from "@/assets/images/youmark-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Dhakate.com",
    year: "2024",
    title: "YouMark",
    results: [
      { title: "Notion Template" },
      { title: "Video bookmarking, joting with timestamps" },
      { title: "Private database" },
    ],
    link: "https://www.notion.so/templates/youmark",
    image: youmarkPage,
  },
  {
    company: "Dhakate.com",
    year: "2024",
    title: "Smartforms",
    results: [
      { title: "Node.js, Tailwind CSS, Clerk" },
      { title: "Fully responsive" },
      { title: "Fast forms with full control" },
    ],
    link: "https://smartforms.dhakate.com",
    image: smartformsPage,
  },
  {
    company: "Portfolio Website",
    year: "2024",
    title: "Single Page Portfolio",
    results: [
      { title: "Node.js, Tailwind CSS" },
      { title: "Fully responsive" },
      { title: "Pixel perfect design" },
    ],
    link: "#",
    image: selfPortfolioPage,
  },
  {
    company: "Unacademy",
    year: "2022-2023",
    title: "NextLevel",
    results: [
      { title: "React Native app" },
      { title: "Modern UI/UX with animations" },
      { title: "Optimized performance" },
    ],
    link: "https://nextlevel.app/",
    image: nextLevelPage,
  },
  {
    company: "Unacademy",
    year: "2020-2022",
    title: "Graphy",
    results: [
      { title: "Swift, SwiftUI, UIKit" },
      { title: "Rapid feature updates" },
      { title: "In-house React Native library integration" },
    ],
    link: "https://graphy.com/",
    image: graphyPage,
  },
  {
    company: "ScoopWhoop",
    year: "2019-2020",
    title: "OKTested",
    results: [
      { title: "Swift" },
      { title: "OTT app with Gamification" },
      { title: "Adsense and IMA ads integration" },
    ],
    link: "https://www.scoopwhoop.com/show/oktested/",
    image: oktestedPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyeBrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 35}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
