import Hero from "src/components/organisms/Hero";

import data from "../data.json";

import ServiceCard from "src/components/molecules/ServiceCard";
import SectionHeader from "src/components/atoms/SectionHeader";
import StylistCard from "src/components/molecules/StylistCard";
import Button from "src/components/atoms/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-14">
      <Hero />

      <section>
        <SectionHeader heading="what we do" />
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(20rem,0.25fr))] gap-10 justify-evenly ">
          {data.services.map((content) => (
            <ServiceCard key={`service-card-${content.heading}`} {...content} />
          ))}
        </div>
      </section>
      <section className="h-[65vh] relative bg-blend-overlay bg-[url(/img/studio.jpeg)] bg-no-repeat bg-cover bg-[#000000ae] flex flex-col items-center justify-center gap-y-8">
        <p className="text-gray-200 text-2xl leading-relaxed mx-auto max-w-4xl text-center">
          {data.hero.heroContent}
        </p>
        <Button label="Get a Fresh Look Today" styles="capitalize" isOutline />
      </section>
      <section>
        <SectionHeader heading="Meet the Experts" />
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(20rem,0.25fr))] gap-14 justify-center items-center mb-8">
          {data.stylists.map((content) => (
            <StylistCard key={`stylist-card-${content.name}`} {...content} />
          ))}
        </div>
      </section>
      <section className="h-[60vh] flex mx-auto max-w-[70%]">
        <div className="relative h-full flex-[0.5]">
          <Image
            src="/img/bg-chair.webp"
            alt="book an appointment"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-def-black flex-[0.5] text-white text-4xl font-bold capitalize flex flex-col justify-center items-center">
          <h1 className="">Save your spot</h1>
        </div>
      </section>
    </main>
  );
}
