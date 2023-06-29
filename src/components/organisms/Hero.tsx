import { Montserrat } from "next/font/google";

import data from "../../data.json";

import tw from "tw-tailwind";
import Button from "../atoms/Button";
import Swiper from "../molecules/Swiper";
import TypewritingText from "../atoms/TypewritingText";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const StyledHero = tw.div`relative h-[90vh]`;

const Hero = () => {
  const { hero } = data;
  return (
    <StyledHero>
      <Swiper data={hero.heroImages} />
      <div className="flex flex-col justify-center items-center gap-y-4 max-w-5xl mx-auto text-center absolute inset-0 z-10">
        <h1 className={`${montserrat.className} text-6xl text-white font-bold`}>
          {hero.heroHeadLight}
        </h1>
        <h2
          className={`${montserrat.className} text-4xl leading-snug text-white font-semibold`}
        >
          {hero.heroText} <TypewritingText texts={hero.texts} />
        </h2>

        <div className="flex items-center gap-x-4 mt-2">
          <Button
            label="Book Your Appointment Now"
            styles="capitalize"
            isOutline
            buttonSize="large"
          />
          {/* <Button label="Start Shopping" buttonSize="large" /> */}
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </StyledHero>
  );
};

export default Hero;
