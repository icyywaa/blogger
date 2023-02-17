import { Parallax } from "react-parallax";
import BG3 from "../assets/background2.jpg";

const ImageOne = () => (
  <Parallax
    className="relative h-screen flex items-center justify-center absolute h-screen w-full scroll-smooth"
    bgImage={BG3}
    strength={800}
  >
    <div className="uppercase text-white p-4 text-2xl bg-slate-800 tracking-wide font-[Poppins]">
      Make it count!
    </div>
  </Parallax>
);

export default ImageOne;
