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
      ) : (
        <>
          <Navbar />

          <SectionWrapper background="bg-orange-400" pos="one">
            <div className="h-screen flex items-center justify-center bg-yellow-400">
              <div className="py-4 rounded-xl flex flex-col md:flex-row bg-base-100 shadow-xl  justify-center items-center">
                <div className="flex items-center justify-center px-8">
                  <Image
                    className="mask rounded-xl "
                    src={CLOUD.src}
                    alt={images[0].alt}
                    height={200}
                    width={200}
                  />
                </div>

                <div className="card-body">
                  <h2 className="card-title max-w-screen text-wrap text-yellow-900">
                    A little birthday card!
                  </h2>
                  <p className="italic  max-w-sm text-wrap text-lg">
                    Sending Khiim some very BIG hugs on his birthday.
                    <br />
                    Wish you a day filled with love, joy and laughter.
                    <br />
                    Happy Birthday!!! 🎂🎉🎈
                    <br />
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
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper background="bg-sky-400" pos="two">
            {/* Write little descriptions about this person */}

            <div className="flex h-screen text-4xl md:text-8xl items-center justify-center relative">
              <Image
                className="mask mask-squircle absolute right-0 m-4 bottom-0"
                src={images[0].src.src}
                alt={images[0].alt}
                height={200}
                width={200}
              />
              <Image
                className="mask mask-squircle absolute left-0 m-4 top-0"
                src={images[1].src.src}
                alt={images[1].alt}
                height={200}
                width={200}
              />
              <Image
                className="mask mask-squircle absolute right-0 m-24 top-0"
                src={images[2].src.src}
                alt={images[1].alt}
                height={150}
                width={150}
              />
              <Image
                className="mask mask-squircle absolute left-[150px] m-12 bottom-[50px]"
                src={images[3].src.src}
                alt={images[1].alt}
                height={140}
                width={140}
              />
              <span className="text-white font-bold px-4 z-[999]">
                Khiim reaches 22!
              </span>
            </div>
          </SectionWrapper>
          <SectionWrapper
            background="bg-emerald-400"
            pos="three"
            custom={"overflow-hidden"}
          >
            <Letter />
          </SectionWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
