import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <div className="relative h-[85vh] flex justify-center items-center">
        <Image
          src="/img/hero-bg.webp"
          alt="hero-bg"
          fill
          priority
          className="object-cover"
        />
        <div className="z-10 flex flex-col justify-center items-center">
          <Image
            src="/img/bankx_white_logo.webp"
            alt="hero-bg"
            height={130}
            width={198}
            className="shadow-lg shadow-def-black"
          />
          <span
            className={`${bodoni.className} text-6xl text-white text-center max-w-[60%]`}
          >
            Unleash Your Best Look
          </span>
        </div>
        <div className="absolute h-full w-full bg-def-black top-0 opacity-40"></div>
      </div>
    </main>
  );
}
