"use client";

import React from "react";
import Image from "next/image";

const Cart = ({
  cartItems,
  total,
  handleSendSMS,
  userName,
  phoneNumber,
  area,
  handleUserNameChange,
  handlePhoneNumberChange,
  handleAreaChange,
  isSending,
  setViewCart,
  errorMessage,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 my-8 max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Confirm Your Bids
          </h2>
          <button
            onClick={setViewCart}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className="overflow-y-auto p-4"
          style={{ maxHeight: "calc(90vh - 180px)" }}
        >
          {/* Cart Items */}
          {cartItems.length > 0 ? (
            <div className="mb-6">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item, index) => (
                  <li key={index} className="py-3 flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
                      <img
                        src={`https://res.cloudinary.com/dayp9uzer/image/upload/${item.name}.jpg`}
                        alt={item.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {item.name}
                      </p>
                      {item.price && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          UGX {item.price}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {item.price * item.quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-8">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Your cart is empty
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Start adding items to your cart
              </p>
            </div>
          )}

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Order Summary
              </h3>
              <div className="space-y-2">
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                  <div className="flex justify-between text-base font-medium">
                    <p className="text-gray-900 dark:text-white">Total</p>
                    <p className="text-green-600 dark:text-green-400">
                      UGX {total}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Payment Method
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center">
              <div className="h-10 w-10 flex-shrink-0 mr-3">
                <Image
                  src="/assets/images/momo.webp" // Adjust path as needed
                  alt="Mobile Money"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Mobile Money
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Use our merchant code
                </p>
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                906181
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              Customer Information
            </h3>

            <div>
              <label
                htmlFor="username"
                className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name{" "}
                <span className="text-gray-400 dark:text-gray-500">
                  (for reward points)
                </span>
              </label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={handleUserNameChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Number{" "}
                <span className="text-red-500 dark:text-red-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                placeholder="Your phone number"
                required
              />
            </div>

            <div>
              <label
                htmlFor="area"
                className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Delivery Area{" "}
                <span className="text-red-500 dark:text-red-400">*</span>
              </label>
              <input
                id="area"
                type="text"
                value={area}
                onChange={handleAreaChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                placeholder="Your delivery area"
                required
              />
            </div>
          </div>

          {errorMessage && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm rounded-md">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Footer with action buttons */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleSendSMS}
              disabled={isSending}
              className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSending
                  ? "bg-blue-400 dark:bg-blue-500"
                  : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isSending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing Bid(s)...
                </>
              ) : (
                "Send Bid Request"
              )}
            </button>
            <button
              onClick={setViewCart}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue Bidding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
