import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          shouldSpin
          orbitDuration="30s"
          spinDuration="10s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          shouldSpin
          orbitDuration="32s"
          spinDuration="12s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          shouldSpin
          orbitDuration="34s"
          spinDuration="14s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          shouldSpin
          orbitDuration="36s"
          spinDuration="16s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          shouldSpin
          orbitDuration="38s"
          spinDuration="18s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          shouldSpin
          orbitDuration="40s"
          spinDuration="20s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          shouldSpin
          orbitDuration="42s"
          spinDuration="22s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          shouldSpin
          orbitDuration="44s"
          spinDuration="24s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          shouldSpin
          orbitDuration="46s"
          spinDuration="26s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          shouldSpin
          orbitDuration="48s"
          spinDuration="28s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Peeking from behind macbook"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animate-ping-large" />
            </div>
            <div className="text-sm font-medium">Available for projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Expceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into funtional, high-performing
            applications, across various platforms 🖥️ 📱 🌏. Let's discuss your
            dream project.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-5">
            <a
              href="https://www.producthunt.com/posts/youmark?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-youmark"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=586873&theme=light"
                alt="YouMark - Your&#0032;ultimate&#0032;YouTube&#0032;video&#0032;organizer&#0032;Notion&#0032;template | Product Hunt"
                width="250"
                height="54"
              />
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </Link>
            <a
              href="mailto:engrdhakate@gmail.com?subject=My%20new%20idea&body=here%20it%20goes"
              className="inline-flex items-center gap-2 border border-white bg-white px-6 h-12 rounded-xl"
            >
              <span>👋🏼</span>
              <span className="text-gray-900 font-semibold">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
