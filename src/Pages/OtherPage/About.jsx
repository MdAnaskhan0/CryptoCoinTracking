import React from 'react';

const About = () => {
  return (
    <div className="text-[#000] min-h-[78vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">About Crypto Tracker</h1>
        
        <p className="text-lg mb-8">
          Welcome to Crypto Tracker, your go-to platform for tracking cryptocurrency prices, market data, and the latest trends in the world of digital currencies.
        </p>
        
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="mb-4">
            Crypto Tracker provides real-time data on thousands of cryptocurrencies including Bitcoin, Ethereum, Litecoin, and many more. We aggregate information from trusted sources to give you accurate and up-to-date market insights.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside px-[20%]">
            <li>Track real-time cryptocurrency prices.</li>
            <li>Get historical price charts for market analysis.</li>
            <li>Access detailed information about each coin including market cap, volume, and supply data.</li>
            <li>Compare multiple cryptocurrencies side by side.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
          <p>
            We use the latest API data from CoinGecko to fetch real-time prices and market data for over 4000+ cryptocurrencies. Our platform allows you to easily search, analyze, and compare different coins. Whether you're an investor, trader, or enthusiast, we provide all the information you need to make informed decisions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
