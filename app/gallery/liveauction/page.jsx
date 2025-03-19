"use client";
import { ArtPrice } from "../../utils/artValue";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavMenu from "@/app/components/navmenu";
import RssFeed from "@/app/components/rss";

const Auction = () => {
  const { calculateC, price, futureValue, artPieces } = ArtPrice();
  const [priceDisplay, setPriceDisplay] = useState([]);
  const [showArt, setShowArt] = useState(null);
  const [tradeArt, setTradeArt] = useState(null);
  const [showPaymentTab, setShowPaymentTab] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(true);

  useEffect(() => {
    // Assume you want to display prices for all artists
    const prices = artPieces.map((artist) => {
      const coEf = calculateC(
        artist.exhibitions,
        artist.articles,
        artist.sales,
        artist.followers
      );
      const currentPrice = price(coEf);
      const futurePrice = futureValue(currentPrice);
      const artistName = artist.artist;
      const pieceName = artist.name;
      return [currentPrice, futurePrice, artistName, pieceName];
    });

    // Set the prices in the state
    setPriceDisplay(prices);
  }, []);

  const handleShowArt = (item) => {
    setShowArt(item);
  };

  const handleCloseArt = () => {
    setShowArt(null);
  };

  const handleTradeArt = (item) => {
    setTradeArt(item);
  };

  const handleCloseTrade = () => {
    setTradeArt(null);
  };

  const toggleMobilePanel = () => {
    setMobileExpanded(!mobileExpanded);
  };

  return (
    <main className="min-h-screen">
      <NavMenu />
      <div className="flex flex-col">
        <div className="bg-blue-100 flex space-x-50 pt-4">
          <h1
            className="font-bold text-green-900 color-gradient md:text-5xl text-3xl mx-auto"
            style={{ fontFamily: "Jost" }}
          >
            Live Auction
          </h1>
        </div>
        <RssFeed />
        <div className="flex flex-col md:flex-row flex-1">
          {/* Main content - art grid */}
          <div
            className={`flex-1 transition-all duration-300 ${
              showArt ? "md:w-2/3 w-full" : "w-full"
            }`}
          >
            <div
              className={`grid ${
                showArt ? "lg:grid-cols-1" : "lg:grid-cols-3 md:grid-cols-2"
              } grid-cols-1 gap-4 p-6`}
            >
              {priceDisplay.map((prices, index) => (
                <div
                  key={index}
                  className="transform transition hover:scale-105 mx-auto max-w-sm w-full"
                >
                  <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                    {/* Product Details */}
                    <div className="p-4">
                      {/* Product Title */}
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {prices[3]}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Lot #{index + 1}
                        </span>
                      </div>

                      {/* Artist */}
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">Artist</p>
                        <p className="text-md font-medium text-gray-800">
                          {prices[2]}
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <p className="text-xs text-gray-500">Current Bid</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">
                            ${prices[0]}
                          </p>
                          <p className="text-xs text-gray-500">
                            Est. Value:{" "}
                            <span className="text-green-600 font-medium">
                              ${prices[1]}
                            </span>
                          </p>
                        </div>

                        <button
                          onClick={() => handleShowArt(artPieces[index])}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view - fixed bottom panel */}
          {showArt && (
            <div className="md:hidden h-[450px] fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 shadow-lg rounded-t-2xl">
              <div
                className="flex justify-center cursor-pointer"
                onClick={toggleMobilePanel}
              >
                <div className="w-12 h-1 bg-gray-300 rounded-full my-2"></div>
              </div>
              <div className="p-4 h-[430px] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">{showArt.name}</h2>
                  <button
                    onClick={handleCloseArt}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex mb-4">
                  <img
                    src={`https://res.cloudinary.com/dayp9uzer/image/upload/${showArt.image}.jpg`}
                    alt={showArt.name}
                    className="w-24 h-24 object-contain rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-gray-600 mb-1">by {showArt.artist}</p>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-700 text-sm">Live</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Current:</span>
                      <span className="text-xl font-bold">
                        ${showArt.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Tabs */}
                <div className="flex border-b mb-4">
                  <button
                    className={`flex-1 py-2 px-2 text-sm font-medium ${
                      !showPaymentTab
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setShowPaymentTab(false)}
                  >
                    Bidding Details
                  </button>
                  <button
                    className={`flex-1 py-2 px-2 text-sm font-medium ${
                      showPaymentTab
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setShowPaymentTab(true)}
                  >
                    Payment Options
                  </button>
                </div>

                {/* Bidding Content */}
                {!showPaymentTab && (
                  <div>
                    {/* Bid Controls */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center border rounded-lg">
                        <input
                          type="number"
                          className="w-full px-3 py-2 text-sm focus:outline-none"
                          placeholder="Enter bid amount"
                          min={Math.floor(showArt.price * 1.1)}
                        />
                        <span className="px-3 py-2 bg-gray-50 text-sm">
                          USD
                        </span>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                        Place Bid Now
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        {[5, 10, 25].map((percent) => (
                          <button
                            key={percent}
                            className="bg-gray-100 hover:bg-gray-200 py-1 rounded-lg transition-colors text-sm"
                          >
                            +{percent}%
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Live Auction Status */}
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 text-sm">
                          Next Minimum Bid
                        </span>
                        <span className="font-semibold">
                          ${Math.floor(showArt.price * 1.1)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-600 text-sm">
                          Estimated Value
                        </span>
                        <span className="text-green-600 font-semibold">
                          ${showArt.futurePrice}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500 mb-1">
                        Time Remaining:{" "}
                        <span className="font-medium">04:32:18</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    {/* Bid History */}
                    <div className="border-t pt-3 mb-4">
                      <h3 className="font-semibold mb-2 text-sm">
                        Recent Bids
                      </h3>
                      <div className="space-y-2">
                        {[
                          {
                            user: "User429",
                            amount: showArt.price,
                            time: "2 mins ago",
                          },
                          {
                            user: "ArtCollector22",
                            amount: showArt.price * 0.9,
                            time: "5 mins ago",
                          },
                          {
                            user: "GalleryBuyer",
                            amount: showArt.price * 0.8,
                            time: "12 mins ago",
                          },
                        ].map((bid, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center text-xs"
                          >
                            <div className="flex items-center">
                              <div
                                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                  i === 0 ? "bg-green-500" : "bg-gray-300"
                                }`}
                              ></div>
                              <span className="font-medium">{bid.user}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold mr-2">
                                ${bid.amount}
                              </span>
                              <span className="text-gray-500">{bid.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Artwork Details */}
                    <div className="border-t pt-3">
                      <h3 className="font-semibold mb-2 text-sm">
                        Artwork Details
                      </h3>
                      <p className="text-gray-600 mb-3 text-xs">
                        {showArt.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="text-gray-500 text-xs">
                            Exhibitions
                          </div>
                          <div className="font-medium text-sm">
                            {showArt.exhibitions}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="text-gray-500 text-xs">Articles</div>
                          <div className="font-medium text-sm">
                            {showArt.articles}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Content */}
                {showPaymentTab && (
                  <div>
                    {/* Payment Methods */}
                    <div className="space-y-3 mb-4">
                      <div className="border rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-sm">
                                Credit Card
                              </h3>
                              <div className="flex space-x-1">
                                <div className="w-6 h-4 bg-gray-200 rounded"></div>
                                <div className="w-6 h-4 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-5 h-5 border border-gray-300 rounded-full mr-2"></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-sm">PayPal</h3>
                              <div className="w-8 h-4 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Credit Card Form */}
                    <div className="mb-4">
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 text-sm border rounded-lg"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="flex space-x-3">
                          <div className="flex-1">
                            <label className="block text-xs text-gray-600 mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 text-sm border rounded-lg"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-xs text-gray-600 mb-1">
                              CVC
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 text-sm border rounded-lg"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Billing Summary */}
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm">
                      <h3 className="font-semibold mb-2 text-sm">
                        Billing Summary
                      </h3>
                      <div className="space-y-1 mb-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">
                            Your Maximum Bid
                          </span>
                          <span>${Math.floor(showArt.price * 1.2)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">
                            Platform Fee (5%)
                          </span>
                          <span>${Math.floor(showArt.price * 1.2 * 0.05)}</span>
                        </div>
                        <div className="border-t pt-1 mt-1 flex justify-between font-bold text-xs">
                          <span>Total (if you win)</span>
                          <span>${Math.floor(showArt.price * 1.2 * 1.05)}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        You will only be charged if you win the auction
                      </p>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      Save Payment Method
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Desktop Side Panel with tabs */}
          <div
            className={`bg-white border-l border-gray-200 transition-all duration-300 overflow-hidden hidden md:block ${
              showArt ? "md:w-1/3 opacity-100" : "w-0 opacity-0"
            }`}
          >
            {showArt && (
              <div className="h-full flex flex-col">
                {/* Tabs */}
                <div className="flex border-b">
                  <button
                    className={`flex-1 py-3 px-4 font-medium ${
                      !showPaymentTab
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setShowPaymentTab(false)}
                  >
                    Bidding
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 font-medium ${
                      showPaymentTab
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setShowPaymentTab(true)}
                  >
                    Payment
                  </button>
                </div>

                {/* Bidding Tab Content */}
                {!showPaymentTab && (
                  <div className="flex-1 overflow-y-auto">
                    <div className="sticky top-0 bg-white z-10 p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Live Bidding</h2>
                        <button
                          onClick={handleCloseArt}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-6">
                        <img
                          src={`https://res.cloudinary.com/dayp9uzer/image/upload/${showArt.image}.jpg`}
                          alt={showArt.name}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                      </div>

                      <h2 className="text-2xl font-bold mb-1">
                        {showArt.name}
                      </h2>
                      <p className="text-gray-600 mb-4">by {showArt.artist}</p>

                      {/* Live Auction Status */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-green-700 font-medium">
                            Bidding Live
                          </span>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Current Bid</span>
                          <span className="text-2xl font-bold">
                            ${showArt.price}
                          </span>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">
                            Next Minimum Bid
                          </span>
                          <span className="font-semibold">
                            ${Math.floor(showArt.price * 1.1)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-600">Estimated Value</span>
                          <span className="text-green-600 font-semibold">
                            ${showArt.futurePrice}
                          </span>
                        </div>

                        <div className="text-sm text-gray-500 mb-2">
                          Time Remaining:{" "}
                          <span className="font-medium">04:32:18</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                          <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                        </div>
                      </div>

                      {/* Bid Controls */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center border rounded-lg">
                          <input
                            type="number"
                            className="w-full px-4 py-3 focus:outline-none"
                            placeholder="Enter bid amount"
                            min={Math.floor(showArt.price * 1.1)}
                          />
                          <span className="px-4 py-3 bg-gray-50">USD</span>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Place Bid Now
                        </button>

                        <div className="grid grid-cols-3 gap-2">
                          {[5, 10, 25].map((percent) => (
                            <button
                              key={percent}
                              className="bg-gray-100 hover:bg-gray-200 py-2 rounded-lg transition-colors"
                            >
                              +{percent}%
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bid History */}
                      <div className="border-t pt-4 mb-6">
                        <h3 className="font-semibold mb-3">Bid History</h3>
                        <div className="space-y-3">
                          {[
                            {
                              user: "User429",
                              amount: showArt.price,
                              time: "2 mins ago",
                            },
                            {
                              user: "ArtCollector22",
                              amount: showArt.price * 0.9,
                              time: "5 mins ago",
                            },
                            {
                              user: "GalleryBuyer",
                              amount: showArt.price * 0.8,
                              time: "12 mins ago",
                            },
                          ].map((bid, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center text-sm"
                            >
                              <div className="flex items-center">
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    i === 0 ? "bg-green-500" : "bg-gray-300"
                                  }`}
                                ></div>
                                <span className="font-medium">{bid.user}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="font-semibold mr-2">
                                  ${bid.amount}
                                </span>
                                <span className="text-gray-500">
                                  {bid.time}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Artwork Details */}
                      <div className="border-t pt-4">
                        <h3 className="font-semibold mb-2">Artwork Details</h3>
                        <p className="text-gray-600 mb-4">
                          {showArt.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-gray-500 text-sm">
                              Exhibitions
                            </div>
                            <div className="font-medium">
                              {showArt.exhibitions}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-gray-500 text-sm">
                              Articles
                            </div>
                            <div className="font-medium">
                              {showArt.articles}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-gray-500 text-sm">Sales</div>
                            <div className="font-medium">{showArt.sales}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-gray-500 text-sm">
                              Followers
                            </div>
                            <div className="font-medium">
                              {showArt.followers}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Tab Content */}
                {showPaymentTab && (
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-4">
                        Payment Methods
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Select your preferred payment method to complete your
                        bid if you win.
                      </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4 mb-6">
                      <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">Credit Card</h3>
                              <div className="flex space-x-1">
                                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-6 h-6 border border-gray-300 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">PayPal</h3>
                              <div className="w-12 h-5 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-6 h-6 border border-gray-300 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">Cryptocurrency</h3>
                              <div className="flex space-x-1">
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-6 h-6 border border-gray-300 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">Bank Transfer</h3>
                              <div className="w-10 h-5 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Credit Card Form */}
                    <div className="border-t pt-6 mb-6">
                      <h3 className="font-semibold mb-4">Card Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">
                              CVC
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold mb-3">Billing Summary</h3>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Your Maximum Bid
                          </span>
                          <span>${Math.floor(showArt.price * 1.2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Platform Fee (5%)
                          </span>
                          <span>${Math.floor(showArt.price * 1.2 * 0.05)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax</span>
                          <span>${Math.floor(showArt.price * 1.2 * 0.08)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                          <span>Total (if you win)</span>
                          <span>${Math.floor(showArt.price * 1.2 * 1.13)}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        You will only be charged if you win the auction
                      </p>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4">
                      Save Payment Method
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Auction;
