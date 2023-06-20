import { Karantina } from "next/font/google";
import Image from "next/image";

import data from "../../data.json";

import tw from "tw-tailwind";
import Button from "../atoms/Button";

const karantina = Karantina({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const StyledHero = tw.div`relative h-[80vh] flex`;

const Hero = () => {
  const { hero } = data;
  return (
    <StyledHero>
      <Image
        src={hero.heroImage}
        alt="hero-bg"
        fill
        priority
        className="object-cover"
      />
      <div className="z-10 flex flex-col justify-center items-center h-full gap-y-2 max-w-3xl mx-auto text-center">
        <h1 className={`${karantina.className} text-6xl text-white font-bold`}>
          {hero.heroText}
        </h1>
        <p className="text-gray-300 text-lg">{hero.heroContent}</p>
        <div className="flex items-center gap-x-4 mt-2">
          <Button label="Book a Haircut" isOutline />

          <Button label="Start Shopping" styles="border bg-transparent" />
        </div>
      </div>
      <div className="absolute h-full w-full bg-black top-0 opacity-50"></div>
    </StyledHero>
  );
};

export default Hero;
