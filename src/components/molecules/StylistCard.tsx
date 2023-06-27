import Image from "next/image";
import React from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const StylistCard = ({
  img,
  name,
  content,
}: {
  img: any;
  name: string;
  content?: string;
}) => {
  return (
    <div className="flex flex-col bg-yellow-700 items-center gap-y-2 border rounded-md transition duration-200 hover:scale-110">
      <div className="bg-def-black relative flex-[0.8]">
        <Image src={img} alt="clipper" fill className="object-contain" />
      </div>
      <h2 className={`${playfair.className} font-bold text-xl`}>{name}</h2>
      {/* <p className="text-center leading-6 flex-[0.2]">{content}</p> */}
    </div>
  );
};

export default StylistCard;
