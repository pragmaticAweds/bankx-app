import Hero from "src/components/organisms/Hero";

import data from "../data.json";

import ServiceCard from "src/components/molecules/ServiceCard";
import SectionHeader from "src/components/atoms/SectionHeader";
import StylistCard from "src/components/molecules/StylistCard";

export default function Home() {
  return (
    <main className="space-y-14">
      <Hero />

      <section>
        <SectionHeader heading="services" />
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(20rem,0.25fr))] gap-y-10 justify-evenly ">
          {data.services.map((content) => (
            <ServiceCard key={`service-card-${content.heading}`} {...content} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader heading="Meet your Stylists" />
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(20rem,0.25fr))] gap-10 place-content-center mb-8">
          {data.stylists.map((content) => (
            <StylistCard key={`stylist-card-${content.name}`} {...content} />
          ))}
        </div>
      </section>
    </main>
  );
}
