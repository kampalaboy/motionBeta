"use client";

import React, { Suspense, useEffect } from "react";
import { CartAdd } from "../components/cartAdd";
import NavMenu from "../components/navmenu";
import Cart from "../components/cartmodal";
import Loading from "../loading";
import { GiTrashCan } from "react-icons/gi";

export default function Shop() {
  const {
    cartItems,
    quantity,
    total,
    orderSummary,
    viewCart,
    userName,
    phoneNumber,
    area,
    isSending,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleViewCart,
    handleUserNameChange,
    handlePhoneNumberChange,
    handleAreaChange,
    sendEmail,
    handleSendSMS,
    closeCart,
  } = CartAdd();

  const itemList = [
    {
      id: 1,
      name: "Angel",
      price: 30000,
      priceDisplay: "30,000",
      image: "/assets/images/MotionBlack.webp",
    },
    {
      id: 2,
      name: "Rock",
      price: 40000,
      priceDisplay: "40,000",
      image: "/assets/images/MotionSilver.webp",
    },
    {
      id: 3,
      name: "Light",
      price: 50000,
      priceDisplay: "50,000",
      image: "/assets/images/MotionGold.webp",
    },
    {
      id: 4,
      name: "Sketch",
      price: 30000,
      priceDisplay: "30,000",
      image: "/assets/images/MotionRed.webp",
    },
    {
      id: 5,
      name: "Sushi",
      price: 40000,
      priceDisplay: "40,000",
      image: "/assets/images/MotionBlue.jpg",
    },
    {
      id: 6,
      name: "Lucy",
      price: 50000,
      priceDisplay: "50,000",
      image: "/assets/images/MotionGreen.jpg",
    },
  ];

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes blink {
         0%, 100% { opacity: 1; }
         50% { opacity: 0; }
       }`,
      styleSheet.cssRules.length
    );
  }, [total]);

  return (
    <main className="min-h-screen min-w-screen">
      <Suspense fallback={<Loading />}>
        <div>
          <div className="w-full sticky top-0  shadow-md">
            <NavMenu
              handleViewCart={handleViewCart}
              cartItems={cartItems}
              orderSummary={orderSummary}
              quantity={quantity}
              total={total}
              totalBidDiv={
                <div
                  className="flex bg-green-500 rounded-lg text-base sm:font-[10px]"
                  style={
                    total > 0
                      ? {
                          animation: "blink 1.5s infinite",
                          textShadow: "0 0 5px rgba(0, 255, 0)",
                        }
                      : {}
                  }
                >
                  <label className="pr-1 text-green-100">Total Bid:</label>
                  <span className="text-green-800">{total}</span>
                </div>
              }
            />
          </div>

          <div className="container mx-auto px-4 py-8">
            {/* Header/Logo Area */}
            <div className="flex justify-center mb-6">
              <img
                src="assets/images/cross.png"
                className="h-24 w-24 lg:h-32 lg:w-32 object-contain"
                alt="Store Logo"
              />
            </div>

            {/* Divider */}
            <div className="w-full max-w-md mx-auto border-b border-teal-700 mb-8"></div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itemList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={`https://res.cloudinary.com/dayp9uzer/image/upload/${item.name}.jpg`}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                      {item.name}
                    </h3>
                    <p className="text-teal-700 font-bold text-xl mb-4">
                      UGX {item.priceDisplay}
                    </p>

                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={item.id.selected}
                      className={`w-full py-2 px-4 rounded-lg font-medium ${
                        item.id.selected
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-teal-600 hover:bg-teal-700 text-white"
                      } transition-colors duration-200`}
                    >
                      {item.id.selected ? "Bid Placed" : "Place Bid"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <div className="mt-12 text-center">
              <div className="inline-block mx-auto">
                <a href="/gallery" className="block">
                  <img
                    src="assets/images/Gallery.webp"
                    alt="Gallery"
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto"
                  />
                  <p className="mt-2 text-lg font-medium text-gray-700">
                    Browse Gallery
                  </p>
                </a>
              </div>
            </div>
            <footer className="bg-green-500 bottom-0 sticky mx-auto lg:w-[30%] rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="text-xs text-gray-700 mb-3">
                <p>Minimum bid UGX 20,000</p>
              </div>

              {cartItems.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex">
                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className=" text-red-600 hover:text-red-800 transition"
                          >
                            <GiTrashCan size={35} />
                          </button>
                        </div>

                        <span className="font-medium text-black">
                          {item.name}
                        </span>
                        <div className="flex space-x-5">
                          <div className="text-black flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleDecrementQuantity(item)}
                              className="px-2 py-1 hover:bg-gray-100 transition"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-sm">
                              {item.price * item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrementQuantity(item)}
                              className="px-2 py-1  hover:bg-gray-100 transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="py-1">
                    <button
                      onClick={handleViewCart}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 rounded-lg transition duration-200"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-1">
                  <p className="mt-1 text-sm text-gray-500">
                    Initiate bidding on items
                  </p>
                </div>
              )}
            </footer>
          </div>

          {viewCart && orderSummary && (
            <Cart
              isSending={isSending}
              handleSendSMS={handleSendSMS}
              handleViewCart={handleViewCart}
              handleUserNameChange={handleUserNameChange}
              handlePhoneNumberChange={handlePhoneNumberChange}
              handleAreaChange={handleAreaChange}
              userName={userName}
              phoneNumber={phoneNumber}
              area={area}
              cartItems={cartItems}
              total={total}
              setViewCart={closeCart}
            />
          )}
        </div>
      </Suspense>
    </main>
  );
}
