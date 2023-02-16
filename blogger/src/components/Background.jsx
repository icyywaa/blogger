import React from "react";
import background from "../assets/background.jpg";

const Background = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-gray-200 to-gray-600 h-full w-full">
        <img
          src={background}
          className="w-full h-full object-cover mix-blend-overlay "
          alt="background main page"
        />
      </div>
    </div>
  );
};

export default Background;
