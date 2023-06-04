import Image from "next/image";
import { Karantina } from "next/font/google";
import Hero from "src/components/molecules/Hero";

const karantina = Karantina({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      {/* <div className="relative h-[85vh] flex justify-center items-center">
        <div className="z-10 flex flex-col justify-center items-center">
          <span
            className={`${karantina.className} text-6xl text-white text-center max-w-[60%]`}
          >
            Keep up your fresh
          </span>
        </div>
        <div className="absolute h-full w-full bg-def-black top-0 opacity-40"></div>
      </div> */}
      <Hero />
    </main>
  );
}
