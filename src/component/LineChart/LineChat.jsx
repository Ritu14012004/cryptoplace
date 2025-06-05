import React, { useEffect } from 'react'
import { useState } from 'react'
import Chart from 'react-google-charts'
function LineChat({hiscoinData}) {
 const [data ,setData ] =useState([["Date" , "Prices"]]);
 useEffect(()=>{
  let dataCopy= [["Date" , "Prices"]];
  if(hiscoinData.prices){
    hiscoinData.prices.map((item)=>{
      dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}` ,item[1]])
    })
    setData(dataCopy)
  }
 },[hiscoinData])
  return (
    <Chart 
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle

    />

    
  )
}

export default LineChat