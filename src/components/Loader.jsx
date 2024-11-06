import React from "react";
import { TypeAnimation } from "react-type-animation";

const Loader = ({ setShowLoader, setIsPlaying }) => {
  const [isStart, setIsStart] = React.useState(false);

  return (
    <div className="h-screen  text-white fixed top-0 left-0 bottom-0 right-0 z-[999] ">
      {isStart ? (
        <div className="h-screen bg-orange-400  flex items-center justify-center">
          <TypeAnimation
            deletionSpeed={40}
            className="text-8xl font-bold"
            sequence={[
              900,
              "Hi :33",
              1500,
              "What's the day today? 🤔",
              1500,
              "April, 2 😎",
              1500,
              "And ...",
              1200,
              () => {
                let audio = document.getElementById("background-music");
                audio.volume = 0.4;
                audio.play();
                setIsPlaying(true);
              },
              "It's your birthday!",
              2000,
              () => setShowLoader(false),
            ]}
          />
        </div>
      ) : (
        <div className="bg-white flex items-center justify-center h-screen relative">
          <div
            className="border-[5px] border-dashed p-8 rounded-2xl"
            onClick={() => setIsStart(true)}
          >
            <button className="btn bg-sky-500 text-white text-4xl py-4 h-auto font-bold hover:bg-white rounded-2xl hover:text-sky-400 shadow-xl">
              {"What's that?"}
            </button>
          </div>

          <div className="absolute bottom-0 text-8xl right-0 m-[-10px] rotate-[35deg] flex items-center text-gray-500 font-bold justify-center rounded-full shadow-2xl p-4 border-[1px] h-40 w-40">
            {"</>"}
          </div>
          <div className="absolute top-0 left-0 text-8xl right-0 m-[-10px] rotate-[35deg] flex items-center justify-center rounded-full shadow-2xl p-4 border-[1px] h-40 w-40">
            😊
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
