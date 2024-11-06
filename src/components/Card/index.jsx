import React, { Fragment, useEffect, useState } from "react";
import "./card.css";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown } from "react-icons/hi";
import CkdeBlock from "./CodeBlock";

const Card = ({ setShowImageSlide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showLetterContext, setShowLetterContext] = useState(false);
  let message = "";
  const accumulator = (text) => {
    message += text;
    return message;
  };

  useEffect(() => {
    if (!isOpen) return;
    // Create setimeout
    let timeout = setTimeout(() => {
      setIsLetterOpen(true);
    }, 1500);

    // Clear setimeout'
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <div
      id="card-section"
      className="h-screen overflow-hidden flex  text-7xl p-4 text-yellow-900flex items-center justify-center relative"
    >
      {/* <span className="flex bg-blue-600 w-full text-white font-extrabold"> */}
      <div class="envlope-wrapper">
        <div
          id="envelope"
          class={`${
            isOpen ? "open" : "close"
          } flex items-center justify-center `}
        >
          <div
            className={`${
              isOpen ? "hidden" : ""
            } bg-white w-[50px] h-[50px] rounded-full absolute translate(-50%, -50%) text-2xl flex items-center justify-center shadow-xl    z-[100] cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            🍰
          </div>{" "}
          💐🌷
          {isLetterOpen && (
            <Fragment>
              <div
                className="w-[500px] h-[500px] bg-white absolute z-[100] rounded-2xl letter-content overflow-hidden"
                style={{ animation: "fadeIn 1s" }}
              >
                <div className="p-4 flex flex-col gap-2">
                  <span>
                    <TypeAnimation
                      className="text-[25px] text-gray-600 italics"
                      sequence={[
                        1000,
                        "Dear wonderful teachers,",
                        1000,
                        () => {
                          setShowLetterContext(true);
                        },
                      ]}
                      cursor={showLetterContext}
                    />
                  </span>
                  <div className="absolute bottom-[-50px] right-[-25px] rotate-[-15deg] bg-white border-[1px] p-4 rounded-full flex items-center justify-center w-[150px] h-[150px] text-9xl shadow-2xl z-[100]">
                    💐
                  </div>

                  <p style={{ lineHeight: "25px" }}>
                    {showLetterContext && (
                      <TypeAnimation
                        className="text-[30px] leading-0"
                        speed={10}
                        sequence={[
                          1000,
                          accumulator("To the best teacher—your "),
                          1000,
                          accumulator("hard work and "),
                          1000,
                          accumulator("dedication have not gone unnoticed. "),
                          1000,
                          accumulator("Words cannot capture my appreciation!"),
                          1000,
                          accumulator(" 🤗"),

                          1000,
                          accumulator("But code can."),
                          () => {
                            setShowCode(true);
                          },
                          () => {
                            setTimeout(() => {
                              setDoneTyping(true);
                            }, 4000);
                          },
                        ]}
                      />
                    )}
                  </p>
                  {showCode && <CkdeBlock />}
                </div>
              </div>
            </Fragment>
          )}
          <div class="front flap"></div>
          <div class="front pocket"></div>
          <div className="letter">
            <div class="words line1"></div>
            <div class="words line2"></div>
            <div class="words line3"></div>
            <div class="words line4"></div>
          </div>
          {doneTyping && (
            <div class="hearts">
              <div class="heart a1"></div>
              <div class="heart a2"></div>
              <div class="heart a3"></div>
            </div>
          )}
        </div>
      </div>
      <a
        // scroll to element with id="next"
        className={`absolute bottom-0 right-0 p-4 border-[1px] rounded-full m-4 hover:bg-white group text-white text-3xl cursor-pointer outline-none focus:bg-yellow-400 ${
          doneTyping ? "" : "hidden"
        }`}
        // Add smooth scrolling to all links
        // style={{ scrollBehavior: "smooth" }}
        onClick={() => {
          // scroll to element with id="next"
          document.getElementById("image-slide-section").scrollIntoView({
            behavior: "smooth",
          });
          setShowImageSlide(true);
        }}
      >
        <HiArrowDown className="group-hover:text-yellow-800" />
      </a>
    </div>
  );
};

export default Card;
