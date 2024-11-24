// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext,useState } from "react";
import { CoinContext } from "../../Context/CoinContext";
import { useEffect } from "react";

const Home = () => {

  const {allCoins, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  
  useEffect(() => {
    setDisplayCoin(allCoins.slice(0, 10));
  }, [allCoins]);


  return (
    <>
      <div className="md:flex justify-center items-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        <div className="flex flex-col mx-auto gap-4 justify-center items-center text-center h-screen">
          {/* Heading */}
          <h1 className="font-bold text-1xl md:text-[65px] mt-10">
            Buy and sell cryptocurrencies
          </h1>
          <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-black bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 py-4">
            Largest Crypto Marketplace{" "}
            <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                <li>Bitcoin (BTC)</li>
                <li>Ethereum (ETH) </li>
                <li>Tether (USDT)</li>
                <li>USD Coin (USDC) </li>
                <li>Binance Coin (BNB) </li>
                <li aria-hidden="true">Ripple (XRP)</li>
              </ul>
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-md md:text-lg font-base tracking-wider text-center md:w-1/2 mx-auto mb-10">
            Welcome to the world of cryptocurrencies maretplace. Sign to explore
            more about cryptocurrencies.
          </p>

          {/* Search bar */}
          <div className="flex gap-4 items-center">
            <form action="" className="flex gap-4 items-center">
              <input
                className="py-2 px-4 outline-none bg-transparent border border-slate-400 w-full text-slate-600 rounded-md"
                type="text"
                placeholder="Search crypto..."
              />
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Search
              </button>
            </form>
          </div>

          {/* Currency table */}
          <div className="overflow-x-auto my-10 w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr className="text-center">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2 text-left">Coins</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">24h Change</th>
                  <th className="px-4 py-2">Market Cap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {displayCoin.map((coin, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2 flex items-center text-center">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-8 h-8 mr-2"
                      />
                      <span>{coin.name}</span>
                    </td>
                    <td className="border px-4 py-2">{currency.symbol}{coin.current_price}</td> 
                    <td className="border px-4 py-2">
                      {coin.price_change_percentage_24h > 0 ? (
                        <span className="text-green-500">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      )}
                    </td>
                    <td className="border px-4 py-2">{currency.symbol}{coin.market_cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
