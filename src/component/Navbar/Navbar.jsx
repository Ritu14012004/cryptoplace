import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from 'react-router-dom';

function Navbar() {
 const {setCurrency } = useContext(CoinContext);

 const CurrencyHandler =(event) =>{
    switch (event.target.value) {
        case "usd":{
            setCurrency({name: "usd", symbol:"$"});
            break;
        }
        case "euro":{
            setCurrency({name: "eur", symbol:"€"});
            break;
        }
        case "inr":{
            setCurrency({name: "inr", symbol:"₹"});
            break;
        }
        default :{
            setCurrency({name: "inr", symbol:"₹"});
            break;
        }
    }
 }

  return (
    <div className="flex  items-center justify-between text-[#ddd] p-[20px] px-[10%] border-b-2 border-[#3c3c3c] ">
      <Link to={'/'} >
        <img src={logo} alt="logo" className="w-[180px]" />
      </Link>
      <ul className="flex gap-[40px] cursor-pointer">
        <Link to={'/'} > <li>Home</li> </Link>
        <Link to={'/features'} > <li>Features</li> </Link>
        <Link to={'/pricing'} > <li>Pricing</li> </Link>
        <Link to={'/blog'} > <li>Blog</li> </Link>
      </ul>
      <div className="flex items-center gap-[max(1vw,12px)] ">
        <select className="text-white bg-transparent border-solid p-1 border-white " onChange={CurrencyHandler}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
        </select>
        <button className="flex items-center gap-2  bg-slate-100 px-4 py-2 rounded-3xl text-slate-600 cursor-pointer font-medium">
          Sign up <img src={arrow} alt="arrow" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
