import { Karantina } from "next/font/google";
import Image from "next/image";

import tw from "tw-tailwind";
import Button from "../atoms/Button";

const karantina = Karantina({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const StyledHero = tw.div`relative h-[85vh] flex`;

const Hero = () => {
  return (
    <StyledHero>
      <Image
        src="/img/hero-bg.webp"
        alt="hero-bg"
        fill
        priority
        className="object-cover"
      />
      <div className="z-10 flex flex-col justify-center items-center h-full gap-y-2 max-w-3xl mx-auto text-center">
        <h1 className={`${karantina.className} text-6xl text-white font-bold`}>
          Keep up your fresh with bankx cut
        </h1>
        {/* <h2 className={`${karantina.className} text-5xl text-gray-300`}>
          Expert Haircuts and Grooming Services
        </h2> */}
        <p className="text-gray-300 text-lg">
          At Bankx Cutz, we offer a wide range of professional hair cutting and
          grooming services. Our experienced barbers use the latest techniques
          and tools to give you the perfect look. Whether you&apos;re in need of
          a classic haircut, straight razor shave, or beard trim, we&apos;ve got
          you covered.
        </p>
        <div className="flex gap-x-4 mt-4">
          <Button label="Book a haircut" isOutline buttonSize="large" />
          {/* <Button label="Book a haircut" /> */}
          {/* <Button label="Start shopping" isOutline /> */}
        </div>
      </div>
      <div className="absolute h-full w-full bg-def-black top-0 opacity-60"></div>
    </StyledHero>
  );
};

export default Hero;
