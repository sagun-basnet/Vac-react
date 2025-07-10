import React from "react";

const HeroSection = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.heading}</h1>
    </>
  );
};

export default HeroSection;
