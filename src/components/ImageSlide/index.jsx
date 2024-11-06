"use client";
import React, { Fragment } from "react";
import "./slide.css";
import { HiArrowDown } from "react-icons/hi";

import images from "./stocks";
import Image from "next/image";

const flower_emojis = [
  "🌸",
  "🌼",
  "🌺",
  "🌷",
  "🌹",
  "🌻",
  "💐",
  "🌾",
  "🍄",
  "🌰",
];
const ImageSlide = ({ showImageSlide, ref, setShowThankyou }) => {
  return (
    <div id="image-slider" className="w-full flex-col lg:flex-row ">
      <div
        ref={ref}
        id="image-slide-section"
        className="h-screen overflow-hidden flex items-center justify-between px-32 relative "
      >
        {showImageSlide && (
          <Fragment>
            <div class="gallery ">
              {/* Split images into 3 parts */}
              <div className="gallery_line">
                {images.slice(0, 6).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute  bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image alt={alt} width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
              <div className="gallery_line">
                {images.slice(6, 12).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute top-0 bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
              <div className="gallery_line">
                {images.slice(13, 19).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute top-0 bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ImageSlide;
