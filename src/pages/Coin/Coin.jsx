import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChat from '../../component/LineChart/LineChat';

function Coin() {
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState(null);
  const [hiscoinData, setHisCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async() => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-u6CdHRwwh1ikSw7srWdj5ZpR'}
      };
      
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  }

  const fetchHistoricalData = async() => {
    try {
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-u6CdHRwwh1ikSw7srWdj5ZpR'}
      };
      
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options);
      const data = await response.json();
      setHisCoinData(data);
    } catch (err) {
      console.error('Error fetching historical data:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [coinId, currency]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!coinData || !hiscoinData) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl text-red-500">Failed to load coin data. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <img src={coinData.image.large} alt={coinData.name} className="w-16 h-16" />
        <div>
          <h1 className="text-2xl font-bold">{coinData.name} ({coinData.symbol.toUpperCase()})</h1>
          <p className="text-gray-400">Current Price: {currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</p>
        </div>
      </div>
      <div className="bg-[#1a1a1a] p-4 rounded-lg">
        <LineChat hiscoinData={hiscoinData} />
      </div>
    </div>
  );
}

export default Coin;