"use cliemt";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Swiper = ({ data }: { data: { img: string; name: string }[] }) => {
  const swiperWrapperRef = useRef<HTMLDivElement | null>(null);
  const totalSlides = data?.length; // Replace with the actual number of slides

  useEffect(() => {
    let slideIndex = 0;
    let slidingInterval: NodeJS.Timeout | undefined;

    const startSliding = () => {
      slidingInterval = setInterval(() => {
        slideIndex++;

        if (slideIndex >= totalSlides) {
          slideIndex = 0; // Reset to the first slide
        }

        if (swiperWrapperRef.current) {
          swiperWrapperRef.current.style.transform = `translateX(-${
            slideIndex * 100
          }%)`;
        }
      }, 3000);
    };

    startSliding();

    return () => {
      clearInterval(slidingInterval);
    };
  }, [totalSlides]);

  return (
    <div
      ref={swiperWrapperRef}
      className="flex transition-transform duration-300 ease-in-out h-full"
    >
      {data?.map(({ img, name }) => (
        <div
          className="swiper-item flex-shrink-0 w-full relative h-full"
          key={img}
        >
          <Image src={img} alt={name} className="object-cover" fill />
        </div>
      ))}
    </div>
  );
};

export default Swiper;
