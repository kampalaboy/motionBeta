"use client"

import React, { useState, useEffect } from 'react';
import { CartAdd } from '../components/cartAdd';
import styles from './shop.module.css';
import NavMenu from '../components/navmenu';
import emailjs from 'emailjs-com';

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
  // const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [orderSummary] = useState([])
  // const [viewCart, setViewCart]=useState(false)
  // const [userName, setUserName] =useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [area, setArea] = useState('');


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
    { id: 1, name: 'Brushes', price: 30000,  priceDisplay:'30,000', image: 'assets/images/Brushes.webp' },
    { id: 2, name: 'Pencils', price: 40000, priceDisplay:'30,000', image: 'assets/images/Pencils.jpg' },
    { id: 3, name: 'Colour Pencils', price: 50000, priceDisplay:'30,000', image: 'assets/images/Colours.jpg' },
    { id: 4, name: 'Oil Paint', price: 30000, priceDisplay:'30,000', image: 'assets/images/Oil.jpg' },
    { id: 5, name: 'Water Colour Paint', price: 40000, priceDisplay:'30,000', image: 'assets/images/Water.jpg' },
    { id: 6, name: 'Sketchbook', price: 50000, priceDisplay:'30,000',  image: 'assets/images/Sketchbook.jpg'},
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

  // const sendEmail = async (messageBody) => {
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
  
  // const handleSendSMS = async () => {
  //   const messageBody = `
  //     Order Summary:
  //     ${cartItems
  //       .map((item) => `${item.name} x ${item.quantity}`)
  //       .map((line) => `  ${line.padEnd(100)}`)
  //       .join('\n')}
      
  //     Total: UGX ${total}
      
  //     UserName : ${userName}
  //     Phone Number: ${phoneNumber}
  //     Area: ${area}
  //   `;
  
  //   // Call the sendEmail function to send the email
  //   sendEmail(messageBody);

  // };
  

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
      {/* {viewCart && orderSummary && (    
  <div className={styles["view-cart"]}>
<div className="fixed inset-0 z-50 flex items-center justify-center">
<div className="modal modal-open">
  <div className="modal-box">
    <p className="text-xl font-semibold mb-4">Cart</p>
    <div className="form-control">
    
        <div className="cart-summary">
        <ul className="divide-y divide-gray-200">
        {cartItems.map((item, index) => (
                 <li className= "flex items-center justify-between py-2" key={index}>
                 <span className="text-m ">{item.name}</span>
                 <span className="text-gray-600 font-bold">{item.quantity}</span> 
                 </li>
               ))}
          </ul><br/>
          <p className="font-bold inline">Total:</p> <p className="font-italic text-lg mr-1 text-green-300 inline"><i>UGX</i></p>{total}<br/><br/>
          <label> 
          USE OUR MERCHANT CODE IF YOU WANT
          </label><br/>
          <div style={{display: 'flex', }}>
            <div className='inline'> 
            <img
                      src="/images/momo.png" // Adjust the path to your image
                      alt="Payment Method"
                      className={styles['payment-icon']} // Apply CSS class for styling
            
          />
            </div>
            <div className='inline mx-1 my-2' > :</div>
            <div className='inline mx-3 my-2 font-size-35'> 906181</div>
            
            </div>
            <br/><br/>
          <input
  style={{
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    marginBottom: '10px',
    width: '300px',
  }}
  placeholder="Username for Points!"
  value={userName}
  onChange={handleUserNameChange}
/>
          <input
          type="tel"
  style={{
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    marginBottom: '10px',
    width: '300px',
  }}
  placeholder="Your Number"
  value={phoneNumber}
  onChange={handlePhoneNumberChange}
/>
<br />
<input
  style={{
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    marginBottom: '10px',
    width: '300px',
  }}
  placeholder="Your Area"
  value={area}
  onChange={handleAreaChange}
/>
<br/>

             
        </div>
      
     
             </div>
             <div className="modal-action">
             <button className="btn btn-primary" onClick={handleSendSMS} > 
             Order 
             </button>
          <button className="btn btn-primary" onClick={() => setViewCart(false)}>
            Close
          </button>
        </div>
      </div>
      </div>
      </div>
  </div>

          )}   */}

    </div>
    
  );
}


