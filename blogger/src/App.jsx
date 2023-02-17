import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import background from "./assets/background.jpg";
import Home from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="">
      <div className="bg-gradient-to-tr from-gray-200 to-gray-600 w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center">
        <img
          src={background}
          className="w-full h-full object-cover mix-blend-overlay"
          alt="background main page"
        />
      </div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
