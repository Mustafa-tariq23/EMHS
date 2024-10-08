import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { Link } from 'react-router-dom';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubServices from "./components/SubServices/SubServices";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path ='/service/:subServices' element = {<SubServices/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export const NotFoundBody = () => {
  return (
    <>
    <div className="min-h-[55vh] flex flex-col items-center justify-center bg-gray-100">
        {/* 404 text with infinite bounce animation */}
        <h1
          className="text-9xl font-extrabold animate-bounce text-gray-800 tracking-widest"
        >
          404
        </h1>

        {/* Badge with infinite wiggle animation */}
        <div
          className="bg-blue-500 px-2 animate-pulse text-sm rounded absolute"
        >
          Page Not Found
        </div>

        {/* Button with wiggle effect on hover */}
        <div className="mt-5">
          <Link to="/" className="relative inline-block text-sm font-medium text-blue-600 group">
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 scale-105 group-hover:scale-100 bg-blue-500 rounded-lg"></span>
            <span className="relative block px-8 py-3 bg-white border border-current rounded-lg group-hover:bg-blue-500 group-hover:text-white">
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}


const NotFound = () => {
  return (
    <>
      <Navbar />
      <NotFoundBody/>
      <Footer />
    </>
  );
};



export default App;
