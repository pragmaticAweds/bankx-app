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
  role,
}: {
  img: any;
  name: string;
  role?: string;
}) => {
  return (
    <div className="flex flex-col items-center border rounded-md transition duration-200 hover:scale-100 h-96">
      <div className="bg-def-black relative w-full flex-[0.85] rounded-t-md">
        <Image
          src={img}
          alt="clipper"
          fill
          className=" object-cover rounded-md"
        />
      </div>
      <div className="w-full flex-[0.15] flex justify-between items-center px-4">
        <h2 className={`text-center font-bold text-xl`}>{name}</h2>
        <span className="">{role}</span>
      </div>
    </div>
  );
};

export default StylistCard;
