import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

function Home() {
 const {allCoin , currency} =useContext(CoinContext);
 const [displayCoin , setDisplayCoin] =useState([]);
 const [input ,setInput] = useState("")

 useEffect(() =>{
  setDisplayCoin(allCoin);
 },[allCoin])
 
 const inputHandler = (event) =>{
   setInput(event.target.value)
   if(event.target.value === " "){
    setDisplayCoin(allCoin);
   }
 }

 const searchHandler = async(event)=>{
  event.preventDefault();
  const coins= await allCoin.filter((item)=>{
  return  item.name.toLowerCase().includes(input.toLowerCase())
  })
  setDisplayCoin(coins);
 }

  return (
    <div className='p-[0px] px-[10px] pb-[100px]'>
        <div className='max-w-[600px] flex flex-col text-center items-center gap-30px mt-[80px] mb-[80px] mx-auto'>
            <h1 className='text-6xl font-bold '>Largest <br/>Crypto Marketplace</h1>
            <p className='w-[80%] pt-6 pb-4 text-[#e3e3e3] leading-6'>Discover the world's largest crypto marketplace, offering access to thousands of cryptocurrencies and their prices.</p>
            <form onSubmit={searchHandler} className='mt-5 w-[80%] bg-white text-black rounded-sm text-[20px] flex gap-10 p-2' >
                <input onChange={inputHandler} value={input} className='flex-1 text-[16px] border-none outline-none pl-[10px]'  type="text"placeholder='Search crypto...' 
                 required />
                 <button className='border-none bg-[#7927ff] text-white text-[16px] rounded-[5px] py-[10px] px-[30px]' type='submit'>Search</button>
                
            </form>
        </div>
         <div className='max-w-[800px] m-auto rounded-[15px] bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)]' >
          <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center border-b border-[#3c3c3c]' >
            <p>#</p>
            <p>Coins</p> 
            <p>Price</p> 
            <p>24H Change</p> 
            <p className='text-right'>Market Cap</p> 
            
          </div>
          {
            displayCoin.slice(0,20).map((item,index)=>(
              <Link to ={`/coin/${item.id}`} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] items-center border-b border-[#3c3c3c] cursor-pointer ' > 
            <p className='pl-5'>{item.market_cap_rank}</p>
               <div className=' p-6 flex items-center gap-[10px]'>
                <img src={item.image} alt="" srcset="" className='w-[34px]' />
                <p className='flex items-center'>{item.name + " - " + item.symbol}</p>
               </div>
               <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
               <p 
  className={`${
    item.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
  }`}
>
  {Math.floor(item.price_change_percentage_24h * 100) / 100}
</p>
               <p className='text-right pr-3' >{currency.symbol} {item.market_cap.toLocaleString()}</p>
              </Link>
            ))
          }
         </div>

    </div>
  )
}

export default Home