import Hero from "src/components/organisms/Hero";

import data from "../data.json";

import ServiceCard from "src/components/molecules/ServiceCard";
import SectionHeader from "src/components/atoms/SectionHeader";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <div className="max-w-[90%] lg:max-w-5xl mx-auto space-y-16">
        <section>
          <SectionHeader heading="services" />
          <div className="grid gap-y-14 sm:[grid-template-columns:repeat(auto-fit,minmax(0,18rem))] justify-evenly">
            {data.services.map((content) => (
              <ServiceCard
                key={`service-card-${content.heading}`}
                {...content}
              />
            ))}
          </div>
        </section>
        <section className="bg-[url(../../public/img/about-us.webp)] bg-cover bg-no-repeat ">
          <SectionHeader heading="about us" />
          <p className="text-lg leading-8 text-center">
            {data.aboutUs.content}
          </p>
        </section>
      </div>
    </main>
  );
}
