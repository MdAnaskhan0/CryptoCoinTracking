import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen text-gray-800 py-16 px-6">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-black">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your privacy matters to us. Here’s how we protect it.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Introduction
        </h2>
        <p className="text-base text-gray-700">
          We at CryptoTracker take your privacy seriously. This Privacy Policy
          outlines the types of information we collect, how we use it, and the
          measures we take to protect your data.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Information We Collect
        </h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-start space-x-4">
            <div className="text-indigo-600 text-xl">
              <i className="fas fa-user-circle"></i>
            </div>
            <div>
              <h3 className="font-semibold">Personal Information</h3>
              <p>We collect your contact details like email and username.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="text-indigo-600 text-xl">
              <i className="fas fa-desktop"></i>
            </div>
            <div>
              <h3 className="font-semibold">Device Information</h3>
              <p>We may collect data about your device and usage patterns.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="text-indigo-600 text-xl">
              <i className="fas fa-cookie"></i>
            </div>
            <div>
              <h3 className="font-semibold">Cookies</h3>
              <p>We use cookies to enhance your experience on our website.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">
          How We Use Your Information
        </h2>
        <div className="space-y-4 text-lg text-gray-700">
          <div className="flex items-start space-x-4">
            <div className="text-indigo-600 text-xl">
              <i className="fas fa-cogs"></i>
            </div>
            <div>
              <h3 className="font-semibold">Provide and Improve Services</h3>
              <p>
                We use your data to provide you with personalized services and
                improve the platform.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-indigo-600 text-xl">
              <i className="fas fa-bell"></i>
            </div>
            <div>
              <h3 className="font-semibold">Notifications and Updates</h3>
              <p>
                We send you updates and alerts about market trends and new
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">Data Security</h2>
        <p className="text-base text-gray-700">
          Our website uses cookies to enhance your experience. Cookies help us
          remember your preferences and provide you with a more personalized
          experience. You can control your cookie settings via your browser.
        </p>
      </section>

      {/* Cookies */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold black mb-4">Cookies</h2>
        <p className="text-base text-gray-700">
          Our website uses cookies to enhance your experience. Cookies help us
          remember your preferences and provide you with a more personalized
          experience. You can control your cookie settings via your browser.
        </p>
      </section>

      {/* Third-Party Links */}
      <section className="max-w-3xl mx-auto mb-16 p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold black mb-4">
          Third-Party Links
        </h2>
        <p className="text-base text-gray-700">
          Our website may contain links to third-party websites. We are not
          responsible for the content or privacy practices of these websites.
          Please review their privacy policies before providing any personal
          data.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
