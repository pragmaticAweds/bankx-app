import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const SectionHeader = ({ heading }: { heading: string }) => {
  return (
    <div className="w-full flex justify-center items-center gap-x-5 lg:gap-x-11 mb-10">
      <span className="3 bg-def-black items-center w-60 h-[0.025rem]"></span>
      <span
        className={`${raleway.className} uppercase whitespace-nowrap  font-medium text-2xl`}
      >
        {heading}
      </span>
      <span className="3 bg-def-black items-center w-60 h-[0.025rem]"></span>
    </div>
  );
};

export default SectionHeader;
