"use client";

import React, { Suspense } from "react";
import { CartAdd } from "../components/cartAdd";
import styles from "./shop.module.css";
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
      name: "Motion Black",
      price: 30000,
      priceDisplay: "30,000",
      image: "/assets/images/MotionBlack.webp",
    },
    {
      id: 2,
      name: "Motion Silver",
      price: 40000,
      priceDisplay: "40,000",
      image: "/assets/images/MotionSilver.webp",
    },
    {
      id: 3,
      name: "Motion Gold",
      price: 50000,
      priceDisplay: "50,000",
      image: "/assets/images/MotionGold.webp",
    },
    {
      id: 4,
      name: "Motion Red",
      price: 30000,
      priceDisplay: "30,000",
      image: "/assets/images/MotionRed.webp",
    },
    {
      id: 5,
      name: "Motion Green",
      price: 50000,
      priceDisplay: "40,000",
      image: "/assets/images/MotionBlue.jpg",
    },
    {
      id: 6,
      name: "Motion Blue",
      price: 50000,
      priceDisplay: "50,000",
      image: "/assets/images/MotionGreen.jpg",
    },
  ];

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
            />
          </div>

          <div className={styles["motion-cart"]}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                margin: 0,
              }}
            >
              <img
                src="assets/images/M1.webp"
                style={{ height: 150, width: 150 }}
              />
            </div>

            <div
              className=" lg:border lg: border-teal-700  lg:rounded-full mx-auto w-[150px] lg:backdrop-brightness-90"
              style={{ display: "flex", justifyContent: "center" }}
            ></div>

            <div className={styles["shopping-cart"]}>
              {itemList.map((item) => (
                <div className={`${styles["cart-item"]}`} key={item.id}>
                  <div className={` rounded-xl ${styles["cart-item-image"]}`}>
                    <img
                      className="rounded-xl"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className={styles["cart-item-name"]}>{item.name}</div>
                  <div className={styles["cart-item-price"]}>
                    UGX {item.priceDisplay}
                  </div>
                  <button
                    className={styles["button"]}
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                    disabled={item.id.selected} // Disable the button if item is already selected
                  >
                    Place Bid
                  </button>
                </div>
              ))}
            </div>

            <div className={styles["shopping-cart"]}>
              <div style={{ padding: 40, paddingLeft: 40 }}>
                <div style={{ width: 250 }}>
                  <a href="/gallery">
                    <img
                      aria-label="Gallery"
                      className={`rounded-xl ${styles["neon-border"]}`}
                      src="assets/images/Gallery.webp"
                      alt="Gallery"
                    />
                  </a>
                </div>
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
