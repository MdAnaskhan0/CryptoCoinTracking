import React from 'react'

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "The Future of Cryptocurrency",
      excerpt: "Cryptocurrency has been gaining significant attention recently. The future of digital currency looks promising, but what are the risks and rewards? Let's explore...",
      date: "November 25, 2024",
      link: "#"
    },
    {
      title: "How to Buy and Sell Crypto",
      excerpt: "Cryptocurrency is becoming more accessible to people all around the world. In this post, we'll go over how to buy and sell crypto safely and securely...",
      date: "November 18, 2024",
      link: "#"
    },
    {
      title: "Top 5 Cryptocurrencies to Watch in 2025",
      excerpt: "With so many cryptocurrencies in the market, it can be hard to decide which ones are worth watching. Here's a list of 5 cryptos that might be big in 2025...",
      date: "November 12, 2024",
      link: "#"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Blog Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Crypto Blog</h1>
          <p className="text-lg text-gray-600 mt-2">Latest news and insights on cryptocurrency</p>
        </div>

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <a href={post.link} className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
