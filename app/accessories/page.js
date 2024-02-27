"use client"

import React, { useState, useEffect } from 'react';
import { CartAdd } from '../components/cartAdd';
import styles from './shop.module.css';
import NavMenu from '../components/navmenu';

<head>
<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/segment7" type="text/css"/>
</head>

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
}   = CartAdd()

  const itemList = [
    { id: 1, name: 'Brushes', price: 30000,  priceDisplay:'30,000', image: 'assets/images/Brushes.webp' },
    { id: 2, name: 'Pencils', price: 40000, priceDisplay:'30,000', image: 'assets/images/Pencils.jpg' },
    { id: 3, name: 'Colour Pencils', price: 50000, priceDisplay:'30,000', image: 'assets/images/Colours.jpg' },
    { id: 4, name: 'Oil Paint', price: 30000, priceDisplay:'30,000', image: 'assets/images/Oil.jpg' },
    { id: 5, name: 'Water Colour Paint', price: 40000, priceDisplay:'30,000', image: 'assets/images/Water.jpg' },
    { id: 6, name: 'Sketchbook', price: 50000, priceDisplay:'30,000',  image: 'assets/images/Sketchbook.jpg'},
  ];

  return (
   
        <div>
          <div className="w-full sticky top-0 bg-white shadow-md">
        
          <NavMenu handleViewCart={handleViewCart} cartItems={cartItems} orderSummary={orderSummary} quantity={quantity} total={total} />
          
          </div>


      <div className={styles["motion-cart"]}>
       <div className={styles["shopping-cart"]}>
          {itemList.map((item) => (
            <div className={styles["cart-item"]} key={item.id}>
              <div className={styles["cart-item-image"]}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles["cart-item-name"]}>{item.name}</div>
              <div className={styles["cart-item-price"]}>UGX {item.priceDisplay}</div>
              {item.selected ? (
                <button className={styles["button"]} >Add to Cart</button>
              ) : (
                <button className={styles["button"]}
                  onClick={() => {
                    handleAddToCart(item);
                  }}

                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div>
          
        </div>

        <div className={styles["check-out"]}>
        <h2 className={styles["check-out-header"]}>CheckOut</h2>
        <ul id={styles["check-out-list"]}>
            {cartItems.map((item) => (
              <li>
              <div className={styles["cart-item-list" ]}key={item.id}>
                                
              <div className={styles["cart-item-price-list"]}>
                  {item.name} x {item.quantity} = UGX {(item.price * item.quantity).toFixed(2)}
              </div>
                <button className={styles["button"]} onClick={() => handleRemoveFromCart(item)}>Remove</button>
                <button className={styles["button"]} onClick={() => handleIncrementQuantity(item)}>+</button>
                <button className={styles["button"]} onClick={() => handleDecrementQuantity(item)}>-</button>
              </div>
              </li>
            ))}
            </ul>
        
        </div>
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
    
  );
}


