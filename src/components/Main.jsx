"use client";
import React, { useEffect } from "react";
import Loader from "./Loader";
import CLOUD from "@/components/ImageSlide/stocks/cloud.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionWrapper from "./SectionWrapper";
import Letter from "./Letter";
import images from "@/components/ImageSlide/stocks";
import Image from "next/image";
import Fireworks from "@/components/Firework/Fireworks";
import SlideshowBackground from "@/components/SlideImg";
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  useEffect(() => {
    // listen to B key
    window.addEventListener("keydown", (e) => {
      if (e.key === "p") {
        let audio = document.getElementById("background-music");
        // reduced the volume to 0 in 1 second
        setIsPlaying(false);
        audio.pause();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        let audio = document.getElementById("background-music");
        // reduced the volume to 0 in 1 second
        audio.volume = 0.5;
        setIsPlaying(true);
        audio.play();
      }
    });
  });

  const card = ()=>{
    return(
         <div className="card-body bg-white fixed bottom-0 left-1/2 transform -translate-x-1/2 justify-center">
         
          <p className="italic max-w-sm text-wrap text-lg text-black">
            Hạnh phúc vinh quang bởi các thầy
            <br />
            Vì đời sự nghiệp ấy trồng cây
            <br />
            Cho dù sóng gió không hề nản
            <br />
            Cám dỗ dòng đời vẫn cứ say.
            <br />
            <h2 className="card-title max-w-screen text-wrap text-yellow-900 ">
          Chúc mừng ngày Nhà giáo Việt Nam! 🎉
          </h2>
            
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-warning"
              onClick={() => {
                let audio = document.getElementById("background-music");

                if (audio.paused) {
                  audio.play();
                  setIsPlaying(true);
                  audio.volume = 0.5;
                } else {
                  setIsPlaying(false);
                  audio.pause();
                }
              }}
            >
              {!isPlaying ? "Listen 🎧" : "Pause 🎵"}
            </button>
          </div>
        </div>

       

    );
    
  }

  const [showLoader, setShowLoader] = React.useState(true);
  const [showDateIntro, setShowDateIntro] = React.useState(false);

  return (
    <>
      <audio
        src={"./UWU.mp3"}
        controls
        className="hidden"
        id="background-music"
      />
    
      {showLoader ? (
        <Loader
          setIsPlaying={(value) => setIsPlaying(value)}
          setShowLoader={(value) => setShowLoader(value)}
        />
       
      ) : 
      (
        <>
        <Fireworks />
          <SlideshowBackground props= {card()}/>
        </>
      )}
    </>
  );
};

export default Main;
