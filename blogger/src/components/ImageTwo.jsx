import { Parallax } from "react-parallax";
import BG2 from "../assets/background.jpg";

const ImageOne = () => (
  <Parallax
    className="relative h-screen flex items-center justify-center absolute h-screen w-full scroll-smooth"
    bgImage={BG2}
    strength={800}
  >
    <div className="uppercase text-white p-4 text-2xl bg-slate-800 tracking-wide font-[Poppins]">
      Share your mind!
    </div>
  </Parallax>
);

export default ImageOne;
