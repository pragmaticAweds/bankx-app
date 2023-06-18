import Image from "next/image";
import { Karantina } from "next/font/google";
import Hero from "src/components/molecules/Hero";

import clipperSvg from "../../public/svgs/clipper.svg";
import shampooSvg from "../../public/svgs/soap-dispenser.svg";
import trimmerSvg from "../../public/svgs/trimmer.svg";

const karantina = Karantina({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <div className="w-full flex justify-center items-center gap-x-11">
        <span className="3 bg-def-black items-center w-40 h-[0.065rem]"></span>
        <span className="uppercase">Services</span>
        <span className="3 bg-def-black items-center w-40 h-[0.065rem]"></span>
      </div>
      <div className="flex justify-around items-center">
        <div className="bg-def-black  rounded-full shadow p-4">
          <Image src={clipperSvg} alt="clipper" height={70} width={70} />
        </div>
        <div className="bg-def-black  rounded-full shadow p-4">
          <Image src={shampooSvg} alt="shampoo" height={70} width={70} />
        </div>

        <div className="bg-def-black  rounded-full shadow p-4">
          <Image src={trimmerSvg} alt="trimmer" height={70} width={70} />
        </div>
      </div>
    </main>
  );
}
