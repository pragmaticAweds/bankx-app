import Typewriter from "typewriter-effect";

const TypewritingText: React.FC<{ texts: string[] }> = ({ texts }) => {
  return (
    <Typewriter
      options={{
        strings: texts,
        autoStart: true,
        loop: true,
        cursor: "_",
      }}
    />
  );
};

export default TypewritingText;
