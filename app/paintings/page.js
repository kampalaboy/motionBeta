"use client"

import React, { useState, useEffect, Suspense } from 'react';
import { CartAdd } from '../components/cartAdd';
import Image  from 'next/image';
import styles from './shop.module.css';
import NavMenu from '../components/navmenu';
import emailjs from 'emailjs-com';
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

  // const [showBox, setShowBox]= useState(null);
  // const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [orderSummary] = useState([])
  // const [viewCart, setViewCart]=useState(false)
  // const [userName, setUserName] =useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [area, setArea] = useState('');
  // const [isSending, setIsSending]=useState(false)
  // const [errorMessage, setErrorMessage]=useState('')
 
  // const  {data: session} = useSession()

  // const handleShowBox = (item) =>{
  //   setShowBox(item);
  // }

  // const handleCloseBox = () =>{
  //   setShowBox(null);
  // }

  


  // const handleAddToCart = (item) => {
  //   const updatedItems = cartItems.map((cartItem) =>
  //     cartItem.id === item.id
  //       ? { ...cartItem, quantity: cartItem.quantity + 1, selected: true }
  //       : cartItem
  //   );
  //   setCartItems([...updatedItems, { ...item, quantity: 1, selected: true }]);
 
  // };

  // const handleRemoveFromCart = (item) => {
  //   const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  //   setCartItems(updatedCartItems);
 
  // };

  // const handleIncrementQuantity = (item) => {
  //   const updatedCartItems = cartItems.map((cartItem) =>
  //     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  //   );
  //   setCartItems(updatedCartItems);
  // };

  // const handleDecrementQuantity = (item) => {
  //   const updatedCartItems = cartItems.map((cartItem) =>
  //     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  //   );
  //   setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  // };

  const itemList = [
    { id: 1, name: 'Motion Black', price: 30000, priceDisplay:'30,000',image: 'assets/images/MotionBlack.webp' },
    { id: 2, name: 'Motion Silver', price: 40000, priceDisplay:'40,000', image: 'assets/images/MotionSilver.webp' },
    { id: 3, name: 'Motion Gold', price: 50000, priceDisplay:'50,000', image: 'assets/images/MotionGold.webp' },
    { id: 4, name: 'Motion Black', price: 30000, priceDisplay:'30,000',image: 'assets/images/MotionBlack.webp' },
    { id: 5, name: 'Motion Silver', price: 50000, priceDisplay:'40,000', image: 'assets/images/MotionSilver.webp' },
    { id: 6, name: 'Motion Gold', price: 50000, priceDisplay:'50,000', image: 'assets/images/MotionGold.webp' },
  ];


   
  
  // useEffect(() => {
  //   const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  //   setTotal(newTotal);
  // }, [cartItems]
  // , [orderSummary]);


  // useEffect(() => {
  //   const newQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  //   setQuantity(newQuantity);
  
  //   const newTotal = cartItems.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );
  //   setTotal(newTotal);
  // }, [cartItems]);


  // const handleViewCart = () =>{
  //   setViewCart(true)
  
  // } 

  // const handleUserNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handlePhoneNumberChange = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  
  // const handleAreaChange = (event) => {
  //   setArea(event.target.value);
  // };

  //  const sendEmail = async (messageBody) => {
  //   // Your email service ID and template ID
  //   const serviceId = 'service_qmmoxrp'; // Replace with your actual service ID
  //   const templateId = 'template_iudz49q'; // Replace with your actual template ID
  
  //   // Your email parameters (from, to, message, etc.)
  //   const emailParams = {
  //     from_name: 'Motion', // Replace with the sender's name
  //     to_name: 'Motion', // Replace with the recipient's name
  //     message: messageBody,
  //   };
  
  //   try {
  //     const response = await emailjs.send(serviceId, templateId, emailParams, 'gROS0lsSeY2r67VyX');
  //     console.log('Email sent successfully:', response);
  //   } catch (error) {
  //     console.error('Failed to send email:', error);
  //   }
  //   window.location.reload();
  // };

  // const handleSendSMS = async (event) => {
  //   const messageBody = `
  //     Order Summary:
  //     ${cartItems
  //       .map((item) => `${item.name} x ${item.quantity}`)
  //       .map((line) => `  ${line.padEnd(100)}`)
  //       .join('\n')}
      
  //     Total: UGX ${total}
      
  //     Username: ${userName}
  //     Phone Number: ${phoneNumber}
  //     Area: ${area}
  //   `;

  // event.preventDefault()
  // setErrorMessage('')

  // console.log(JSON.stringify({ cartItems, userName, phoneNumber, area }));

  // const res = await fetch("api/orders", {
  //     method: 'POST',
  //     body: JSON.stringify({cartItems, userName, phoneNumber, area }),
  //     "content-type":"application/json"
  // })

  // if (res.ok) {
  //   // Request was successful
  //   const data = await res.json();
  //   console.log('Order created successfully:', data.message);
  // } else {
  //   // Request failed
  //   const errorData = await res.json();
  //   console.error('Error creating order:', errorData.message);
  //   setErrorMessage('Failed to create order. Please try again.');
  // }
  
  //   // Call the sendEmail function to send the email
  //   sendEmail(messageBody);
  //   setIsSending(true);

  //   setTimeout(() => {
  //     // Simulate a successful SMS send after 2 seconds
  //     setIsSending(false); // Set isSending back to false
  //   }, 10000);
  // };
  

  // const closeCart = () => {
  //   setViewCart(false);
  // };


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
             <div  style={{
                    height: 70,
                     width: 110,
                    justifyContent: 'center'}}
                     >
        <div className="inline">
        <h1 className={`${styles.neonText} ${styles.flicker} inline`}>4</h1> 
        </div>
        <p className={`${styles.neonTextDots} ${styles.flicker} inline text-5xl`}>:</p> 
        <div className="inline"><h1 className={`${styles.neonText} ${styles.flicker} inline`}>20</h1> </div>
        </div>
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


