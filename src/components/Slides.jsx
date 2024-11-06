import React from "react";
import { TypeAnimation } from "react-type-animation";
import Card from "./Card";

const Slides = ({ setIsDoneIntro }) => {
  const [isStart, setIsStart] = React.useState(false);

  return (
    <div className="h-screen w-screen z-[1000] fixed">
      {!isStart ? (
        <div className="h-screen bg-green-300  flex items-center justify-center">
          <button className="btn btn-base ">Click me</button>
        </div>
      ) : (
        <span className="flex items-center justify-center h-screen bg-orange-500 text-9xl font-bold text-white ">
          <TypeAnimation
            speed={30}
            sequence={[
              1000,
              "Hi :33",
              2000,
              "What day is it?",
              2400,
              "It's ...",
              2400,
              "2/4/2024",
              2400,
              " It's ??? birthday",
              1000,
              "A little gift for you",
              800,
              () => setIsDoneIntro(true),
            ]}
          />
        </span>
      )}
    </div>
  );
};

export default Slides;
