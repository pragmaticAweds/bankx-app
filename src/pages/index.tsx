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
      <Hero />
      <div className="w-full flex justify-center">
        <span className="3 bg-def-black items-center"></span>
        <span className="">Services</span>
        <span className=""></span>
      </div>
    </main>
  );
}
