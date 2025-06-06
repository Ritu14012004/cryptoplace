import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();


const CoinContextProvider = (props)=>{
    const [allCoin, setAllCoin]= useState([]) ;
    const [currency, setCurrency]= useState({
      name:"eur",
      symbol:"€" 
    });
     const fetchAllCoin= async ()=>{
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-u6CdHRwwh1ikSw7srWdj5ZpR'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&days=15&interval=daily`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
     }

     useEffect(() =>{
        fetchAllCoin(); 
        console.log(allCoin)
     },[currency] )

    const ContextValue={
        allCoin, currency, setCurrency
    }
return(
    <CoinContext.Provider value={ContextValue} >
     {props.children}
    </CoinContext.Provider>
  
)


}

export default CoinContextProvider;