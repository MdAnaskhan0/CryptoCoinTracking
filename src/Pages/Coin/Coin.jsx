import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";
import LineChart from "../../Components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-vBU5A6PKYGXLJUFcx3zEj6yM",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-vBU5A6PKYGXLJUFcx3zEj6yM",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily&precision=full`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (!coinData || !historicalData) {
    // Show a loading screen while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const { name, image, symbol } = coinData;

  return (
    <>
      <div className="px-6 py-12  text-black max-w-[80%] mx-auto">
        {/* Coin Header */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={image.large}
            alt={name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
          />
          <h1 className="text-4xl font-bold">{name} ({symbol.toUpperCase()})</h1>
        </div>

        {/* Coin Stats and Market Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Market Cap Rank</h2>
            <p className="text-2xl font-bold">{coinData.market_cap_rank}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Current Price</h2>
            <p className="text-2xl font-bold">
              {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Market Cap</h2>
            <p className="text-2xl font-bold">
              {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </p>
          </div>
        </div>

        {/* 24 Hour Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">24 Hour High</h2>
            <p className="text-2xl font-bold">
              {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">24 Hour Low</h2>
            <p className="text-2xl font-bold">
              {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </p>
          </div>
        </div>

        {/* Coin Chart */}
        <div className="mt-12">
          <LineChart historicalData={historicalData} />
        </div>
      </div>
    </>
  );
};

export default Coin;
