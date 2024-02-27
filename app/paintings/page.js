"use client"

import React, { Suspense } from 'react';
import { CartAdd } from '../components/cartAdd';
import styles from './shop.module.css';
import NavMenu from '../components/navmenu';
import Cart from '../components/cartmodal';
import Loading from '../loading';

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
    { id: 1, name: 'Motion Black', price: 30000, priceDisplay:'30,000',image: 'assets/images/MotionBlack.webp' },
    { id: 2, name: 'Motion Silver', price: 40000, priceDisplay:'40,000', image: 'assets/images/MotionSilver.webp' },
    { id: 3, name: 'Motion Gold', price: 50000, priceDisplay:'50,000', image: 'assets/images/MotionGold.webp' },
    { id: 4, name: 'Motion Red', price: 30000, priceDisplay:'30,000',image: 'assets/images/MotionRed.webp' },
    { id: 5, name: 'Motion Green', price: 50000, priceDisplay:'40,000', image: 'assets/images/MotionBlue.jpg' },
    { id: 6, name: 'Motion Blue', price: 50000, priceDisplay:'50,000', image: 'assets/images/MotionGreen.jpg' },
  ];

  return (
    
    <main className="min-h-screen min-w-screen">
        <Suspense fallback={<Loading/>}>
        <div>
          <div className="w-full sticky top-0  shadow-md">
          <NavMenu handleViewCart={handleViewCart} cartItems={cartItems} orderSummary={orderSummary} quantity={quantity} total={total} />
          </div>


      <div className={styles["motion-cart"]}>
      <div style={{  display:'flex',
                      justifyContent:'center',
                      alignSelf:'center',
                      margin:0 }}>
                  <img src='assets/images/M1.webp'
                         style={{height:150 , width:150}}      
                  />
        </div>

        <div className=" lg:border lg: border-teal-700  lg:rounded-full mx-auto w-[150px] lg:backdrop-brightness-90" style={{ display:'flex' , justifyContent:'center'}}>

        </div>
       
      
        <div className={styles["shopping-cart"]}>
        {itemList.map((item) => (
                <div className={`${styles["cart-item"]}`} key={item.id}>
                  <div  className={` rounded-xl ${styles["cart-item-image"]}`}>
                    <img className="rounded-xl" src={item.image} alt={item.name} />
                  </div>
                  <div className={styles["cart-item-name"]}>{item.name}</div>
                  <div className={styles["cart-item-price"]}>UGX {item.priceDisplay}</div>
                  <button
                    className={styles["button"]}
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                    disabled={(item.id.selected)} // Disable the button if item is already selected
                  >
                    Place Bid
                  </button>                  
                </div>
              ))}
      
      </div>

        <div className={styles["shopping-cart"]}>
        <div style={{padding: 40, paddingLeft:40}} >
              
              <div style={{width: 250}} >
                <a href='/gallery'> 
                
                <img aria-label='Gallery' className={`rounded-xl ${styles["neon-border"]}`} src='assets/images/Gallery.webp' alt='Gallery' />
                </a>
              </div>             
          </div>
          </div>

        <footer className={`${styles["check-out"]}`}>
        <h2 className={styles["check-out-header"]}>CheckOut</h2>
        <div style={{fontSize:10, marginBottom:10 }}><p>Minimum Bid UGX 20,000 please</p></div>
        <ul id={styles["check-out-list"]}>
            {cartItems.map((item) => (
              <li>
              <div className={styles["cart-item-list" ]}key={item.id}>
                                
              <div className={styles["cart-item-price-list"]}>
                  {item.name} x {item.quantity} = UGX {(item.price * item.quantity).toFixed(2)}
              </div>
                <button className={styles["button"]} onClick={()  =>{handleRemoveFromCart(item)}}>Remove</button>
                <button className={styles["button"]} onClick={() => { handleIncrementQuantity(item)}}>+</button>
                <button className={styles["button"]} onClick={() => { handleDecrementQuantity(item)}}>-</button>
              </div>
              </li>
            ))}
            </ul>
        
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


