import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-100 py-12 min-h-[80vh]">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the powerful features of our Crypto Tracking site and stay
          ahead in the cryptocurrency market.
        </p>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Price Tracking</h3>
            <p className="text-gray-600">
              Track the real-time prices of cryptocurrencies in various fiat currencies, ensuring you never miss an opportunity.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Charting Tools</h3>
            <p className="text-gray-600">
              Visualize the market trends with advanced charting tools and get deeper insights into price fluctuations.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Notifications</h3>
            <p className="text-gray-600">
              Receive instant price alerts and notifications to stay updated on the latest market movements.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Platform?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides the most comprehensive and up-to-date information about the cryptocurrency market. From real-time price tracking to advanced charting and instant notifications, we offer everything you need to make informed decisions in the fast-paced world of crypto trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
