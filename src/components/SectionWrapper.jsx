import React from "react";

const SectionWrapper = ({ children, background, pos, custom }) => {
  return <div className={`${background} h-screen ${custom}`}>{children}</div>;
};

export default SectionWrapper;
