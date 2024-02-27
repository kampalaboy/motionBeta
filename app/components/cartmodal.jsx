"use client"

import styles from './shop.module.css'
import React from 'react'


const Cart =  (({cartItems, total, handleSendSMS,
                               userName, phoneNumber, area,
                               handleUserNameChange, handlePhoneNumberChange, handleAreaChange,
                                isSending, setViewCart, errorMessage}) => {

 

    return(
        <div className={styles["view-cart"]}>
        <div className="fixed inset-0 z-50 w-53 flex items-center justify-center">
        <div className="modal modal-open">
          <div style={{paddingRight: 20 }} className="modal-box">
            <p className="text-xl font-semibold mb-4">Cart</p>
            <div className="form-control" >

                <form method='post'>
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
                              src="assets/images/momo.webp" // Adjust the path to your image
                              alt="Payment Method"
                              className={styles['payment-icon']} // Apply CSS class for styling
                    
                  />
                    </div>
                    <div className='inline mx-1 my-2' > :</div>
                    <div className='inline mx-3 my-2'> 906181</div>
                    
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
          require={true}
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
        require={true}
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
                </form>

                <p>{errorMessage}</p>
                     </div>
                     <div className="modal-action">
                      {isSending ? (
                         <button className="btn btn-primary">
                         Sending...
                       </button>
                      ):(
                        <>
                     <button className="btn btn-primary" onClick={handleSendSMS} > 
                     Order 
                     </button>
                        </>
                      
                      )}
                  <button className="btn btn-primary" onClick={setViewCart}>
                    Close
                  </button>
                </div>
              </div>
              </div>
              </div>
          </div>
    )
})

export default Cart;

