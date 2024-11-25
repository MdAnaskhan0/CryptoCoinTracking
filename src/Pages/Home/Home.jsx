// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext, useState } from "react";
import { CoinContext } from "../../Context/CoinContext";
import { useEffect } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

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
                onChange={handleSearch}
                className="py-2 px-4 outline-none bg-transparent border border-slate-400 w-full text-slate-600 rounded-md"
                type="text"
                placeholder="Search crypto..."
                required
                value={searchInput}
                list="coins"
              />

              {/* Datalist */}
              <datalist id="coins" className="custom-datalist">
                {allCoins.map((coin, index) => (
                  <option key={index} value={coin.name} />
                ))}
              </datalist>

              <button
                type="submit"
                className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Search
              </button>
            </form>
          </div>

          {/* Currency Table */}
          <div className="my-10 w-full overflow-x-auto scrollbar-hide rounded-lg">
            <table className="w-full table-auto divide-y divide-gray-200 shadow-lg rounded-lg">
              <thead className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white sticky top-0">
                <tr className="text-center text-sm md:text-base">
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3 text-left">Coins</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">24h Change</th>
                  <th className="px-4 py-3">Market Cap</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 bg-white divide-y divide-gray-200">
                {displayCoin.map((coin, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-gray-100 transition-colors duration-300"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    {/* Coin Name and Link */}
                    <td className="px-4 py-3 flex items-center text-left space-x-2">
                      <Link
                        to={`/coin/${coin.id}`} // Dynamically set the route based on coin ID
                        className="flex items-center space-x-2 hover:cursor-pointer"
                      >
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-8 h-8 rounded-full border border-gray-300"
                        />
                        <span className="font-medium">{coin.name}</span>
                      </Link>
                    </td>

                    <td className="px-4 py-3 font-semibold">
                      {currency.symbol}
                      {coin.current_price.toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      {coin.price_change_percentage_24h > 0 ? (
                        <span className="text-green-500 font-bold">
                          +{coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="text-red-500 font-bold">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {currency.symbol}
                      {coin.market_cap.toLocaleString()}
                    </td>
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
