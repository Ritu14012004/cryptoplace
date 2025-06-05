import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Coin from "./pages/Coin/Coin.jsx"
import Features from "./pages/Features/Features.jsx"
import Pricing from "./pages/Pricing/Pricing.jsx"
import Blog from "./pages/Blog/Blog.jsx"
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-[linear-gradient(#0b004e,#1d152f,#002834)]">
     <Navbar />  
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/> } />
        <Route path='/features' element={<Features/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/blog' element={<Blog/>} />
       </Routes>
       <Footer />
      </div>
    </>
  );
}

export default App;
