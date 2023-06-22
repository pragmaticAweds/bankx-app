const SectionHeader = ({ heading }: { heading: string }) => {
  return (
    <div className="w-full flex justify-center items-center gap-x-5 lg:gap-x-11 mb-10">
      <span className="3 bg-def-black items-center w-60 h-[0.065rem]"></span>
      <span className="uppercase whitespace-nowrap  font-medium text-lg">
        {heading}
      </span>
      <span className="3 bg-def-black items-center w-60 h-[0.065rem]"></span>
    </div>
  );
};

export default SectionHeader;
