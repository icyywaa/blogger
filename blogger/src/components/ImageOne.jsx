import { Parallax } from "react-parallax";
import BG1 from "../assets/background3.jpg";

const ImageOne = () => (
  <Parallax
    className="relative h-screen flex items-center justify-center absolute h-screen w-full scroll-smooth"
    bgImage={BG1}
    strength={800}
  >
    <div className="uppercase text-white p-4 text-2xl bg-slate-800 tracking-wide font-[Poppins]">
      Welcome to Blogger!
    </div>
  </Parallax>
);

export default ImageOne;
