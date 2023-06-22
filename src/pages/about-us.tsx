import React from "react";
import SectionHeader from "src/components/atoms/SectionHeader";

import data from "../data.json";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <section className="bg-[url(../../public/img/about-us.webp)] bg-cover bg-no-repeat ">
        <SectionHeader heading="about us" />
        <p className="text-lg leading-8 text-center">{data.aboutUs.content}</p>
      </section>
    </div>
  );
};

export default AboutUs;
