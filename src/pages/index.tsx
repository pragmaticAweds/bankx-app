import { Karantina } from "next/font/google";
import Hero from "src/components/organisms/Hero";

import data from "../data.json";

import ServiceCard from "src/components/molecules/ServiceCard";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <div className="w-full flex justify-center items-center gap-x-11">
        <span className="3 bg-def-black items-center w-40 h-[0.065rem]"></span>
        <span className="uppercase">Services</span>
        <span className="3 bg-def-black items-center w-40 h-[0.065rem]"></span>
      </div>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(0,18rem))] justify-around items-center">
        {data.services.map((content) => (
          <ServiceCard key={content.content} {...content} />
        ))}
      </div>
    </main>
  );
}
