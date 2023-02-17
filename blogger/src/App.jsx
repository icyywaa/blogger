import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import background from "./assets/background.jpg";
import Home from "./components/Home";
import Blog from "./components/Blog";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="">
      {/* <div className="bg-gradient-to-tr from-gray-200 to-gray-600 w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center">
        <img
          src={background}
          className="w-full h-full object-cover mix-blend-overlay"
          alt="background main page"
        />
      </div> */}
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
