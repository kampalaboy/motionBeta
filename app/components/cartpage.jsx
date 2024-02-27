"use client"

import styles from './shop.module.css'
import { useState, useEffect } from 'react';


export default function CartCRUD () {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [orderSummary] = useState([])
    const[viewCart, setViewCart]=useState(false)
    const [userName, setUserName] =useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [area, setArea] = useState('');
    const [isSending, setIsSending]=useState(false)
    
    const handleRemoveFromCart = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
     
      };
    
      const handleIncrementQuantity = (item) => {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
      };
    
      const handleDecrementQuantity = (item) => {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
        setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
      };

      useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        setTotal(newTotal);
      }, [cartItems]
      , [orderSummary]);
    
    
      useEffect(() => {
        const newQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setQuantity(newQuantity);
      
        const newTotal = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setTotal(newTotal);
      }, [cartItems]);
    
    
      const handleViewCart = () =>{
        setViewCart(true)
      
      } 
    
      const handleUserNameChange = (event) => {
        setUserName(event.target.value);
      };
    
      const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };
      
      const handleAreaChange = (event) => {
        setArea(event.target.value);
      };
    
       const sendEmail = async (messageBody) => {
        // Your email service ID and template ID
        const serviceId = 'service_qmmoxrp'; // Replace with your actual service ID
        const templateId = 'template_iudz49q'; // Replace with your actual template ID
      
        // Your email parameters (from, to, message, etc.)
        const emailParams = {
          from_name: 'Motion', // Replace with the sender's name
          to_name: 'Motion', // Replace with the recipient's name
          message: messageBody,
        };
      
        try {
          const response = await emailjs.send(serviceId, templateId, emailParams, 'gROS0lsSeY2r67VyX');
          console.log('Email sent successfully:', response);
        } catch (error) {
          console.error('Failed to send email:', error);
        }
        window.location.reload();
      };
      
      const handleSendSMS = async () => {
        const messageBody = `
          Order Summary:
          ${cartItems
            .map((item) => `${item.name} x ${item.quantity}`)
            .map((line) => `  ${line.padEnd(100)}`)
            .join('\n')}
          
          Total: UGX ${total}
          
          Username: ${userName}
          Phone Number: ${phoneNumber}
          Area: ${area}
        `;
      
        // Call the sendEmail function to send the email
        sendEmail(messageBody);
        setIsSending(true);
    
        setTimeout(() => {
          // Simulate a successful SMS send after 2 seconds
          setIsSending(false); // Set isSending back to false
        }, 10000);
      };
    
      const closeCart = () => {
        setViewCart(false);
      };
    
return(
    <main className="min-h-screen">
         <div>
            <div className={`${styles.cartpage}`}>
                <div className={`${styles.cartitem}`}>
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
                setViewCart={closeCart}/>
          )}  
         </div>
    </main>
   
)
}