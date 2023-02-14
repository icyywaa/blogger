import React from "react";
import background from "../assets/background.jpg";

const Background = () => {
  return (
    <div className="h-screen w-screen bg-fixed overflow-auto">
      <img src={background} alt="background main page" />
    </div>
  );
};

export default Background;
