import Image from "next/image";
import React from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const ServiceCard = ({
  img,
  heading,
  content,
}: {
  img: any;
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2 border p-6 rounded-md transition duration-200 hover:scale-110">
      <div className="bg-def-black rounded-full shadow p-6">
        <Image src={img} alt="clipper" height={70} width={70} />
      </div>
      <h2 className={`${playfair.className} font-bold text-xl`}>{heading}</h2>
      <p className="text-center max-w-[80%] md:max-w-none leading-6">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
