import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from 'react-router-dom';

function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CurrencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "euro": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-[#ddd] p-4 sm:p-[20px] px-4 sm:px-[10%] border-b-2 border-[#3c3c3c]">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-[140px] sm:w-[180px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-[40px] cursor-pointer">
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/features'}><li>Features</li></Link>
          <Link to={'/pricing'}><li>Pricing</li></Link>
          <Link to={'/blog'}><li>Blog</li></Link>
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-[max(1vw,12px)]">
          <select className="text-white bg-transparent border-solid p-1 border-white" onChange={CurrencyHandler}>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
          </select>
          <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-3xl text-slate-600 cursor-pointer font-medium">
            Sign up <img src={arrow} alt="arrow" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[#1a1a1a] z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link to={'/'} className="text-[#ddd] hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to={'/features'} className="text-[#ddd] hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to={'/pricing'} className="text-[#ddd] hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link to={'/blog'} className="text-[#ddd] hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          
          <div className="flex flex-col space-y-4 pt-4 border-t border-[#3c3c3c]">
            <select 
              className="text-white bg-transparent border-solid p-2 border-white rounded-lg w-full" 
              onChange={CurrencyHandler}
            >
              <option value="inr">INR</option>
              <option value="usd">USD</option>
              <option value="euro">EURO</option>
            </select>
            <button className="flex items-center justify-center gap-2 bg-slate-100 px-4 py-2 rounded-3xl text-slate-600 cursor-pointer font-medium">
              Sign up <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
