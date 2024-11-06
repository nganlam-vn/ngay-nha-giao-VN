import { React, useState, useEffect } from "react";
import "./codeblock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright as monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
function CkdeBlock() {
  const first_text = `
    while(Student.isAlive()){
        Student.say("Thank you, teachers!");
        Student.learn();
        Student.live();
        Student.repeat();
    }`;

  const [text1, setText1] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);

  return (
    <span className="w-[410px] h-[185px] text-sm rounded-lg bg-black relative py-6 px-1 mt-2 z-[0]">
      <div className="absolute flex gap-2 right-0 top-0 m-2">
        <div className="w-[10px] h-[10px] bg-red-400 rounded-full"></div>
        <div className="w-[10px] h-[10px] bg-teal-400 rounded-full"></div>
        <div className="w-[10px] h-[10px] bg-blue-400 rounded-full"></div>
      </div>
      <SyntaxHighlighter
        className="blinking-cursor"
        language="cpp"
        style={monokai}
      >
        {text1}
      </SyntaxHighlighter>
    </span>
  );
}

export default CkdeBlock;
