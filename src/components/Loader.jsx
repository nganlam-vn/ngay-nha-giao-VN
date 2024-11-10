import React from "react";
import { TypeAnimation } from "react-type-animation";
import Fireworks from "./Firework/Fireworks";



const Loader = ({ setShowLoader, setIsPlaying }) => {
  const [isStart, setIsStart] = React.useState(false);

  return (
    <div className="h-screen  text-white fixed top-0 left-0 bottom-0 right-0 z-[999] ">
      {isStart ? (
        <div className="h-screen bg-red-200 flex items-center justify-center">
          <TypeAnimation
            deletionSpeed={40}
            className="text-6xl font-bold"
           
            sequence={[ //sequence là một mảng chứa các object, mỗi object chứa các thông tin về từng đoạn text cần hiển thị
         
              900,
              "Ngày 20 tháng 11 năm 2024",
              900,
              "Gửi đến các thầy cô yêu quý của chúng em!",  
              1200,
              () => {
                let audio = document.getElementById("background-music");
                audio.volume = 0.4;
                audio.play();
                setIsPlaying(true);
              },
              "Chúc mừng ngày nhà giáo Việt Nam! 🎉🎉🎉",
              2000,
              ,
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
            <button className="btn bg-red-400 text-white text-4xl py-4 h-auto font-bold hover:bg-white rounded-2xl hover:text-red-400 shadow-xl">
              {"Click để bắt đầu"}
            </button>
          </div>

          <div className="absolute bottom-0 text-8xl right-0 m-[-10px] rotate-[35deg] flex items-center text-gray-500 font-bold justify-center rounded-full shadow-2xl p-4 border-[1px] h-40 w-40">
            {"FIT"}
          </div>
          <div className="absolute top-0 left-0 text-8xl right-0 m-[-10px] rotate-[35deg] flex items-center justify-center rounded-full shadow-2xl p-4 border-[1px] h-40 w-40">
            🌻
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
