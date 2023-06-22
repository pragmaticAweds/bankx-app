import Hero from "src/components/organisms/Hero";

import data from "../data.json";

import ServiceCard from "src/components/molecules/ServiceCard";
import SectionHeader from "src/components/atoms/SectionHeader";

export default function Home() {
  return (
    <main className="space-y-14">
      <Hero />

      <section>
        <SectionHeader heading="services" />
        <div className="grid gap-y-14 sm:[grid-template-columns:repeat(auto-fit,minmax(0,18rem))] justify-evenly">
          {data.services.map((content) => (
            <ServiceCard key={`service-card-${content.heading}`} {...content} />
          ))}
        </div>
      </section>

      <div className="bg-[url(../../public/img/bg-chair.webp)]  h-[70vh] bg-cover bg-center bg-no-repeat">
        <div className=""></div>
      </div>
    </main>
  );
}
