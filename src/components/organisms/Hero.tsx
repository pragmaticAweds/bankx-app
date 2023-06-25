import { Karantina } from "next/font/google";
import Image from "next/image";

import data from "../../data.json";

import tw from "tw-tailwind";
import Button from "../atoms/Button";
import Swiper from "../molecules/Swiper";

const karantina = Karantina({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const StyledHero = tw.div`relative h-[90vh]`;

const Hero = () => {
  const { hero } = data;
  return (
    <StyledHero>
      <Swiper data={hero.heroImages} />
      <div className="flex flex-col justify-center items-center gap-y-4 max-w-3xl mx-auto text-center absolute inset-0 z-10">
        <h1 className={`${karantina.className} text-6xl text-white font-bold`}>
          {hero.heroText}
        </h1>
        <p className="text-gray-300 text-lg">{hero.heroContent}</p>
        <div className="flex items-center gap-x-4 mt-2">
          <Button label="Book a Haircut" isOutline buttonSize="large" />
          <Button
            label="Start Shopping"
            styles="border bg-transparent"
            buttonSize="large"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </StyledHero>
  );
};

export default Hero;
