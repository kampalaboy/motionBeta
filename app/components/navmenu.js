"use client"

import React from "react";
import styles from './navmenu.module.css'
import { useSession } from "next-auth/react";
import Image from  "next/image";


export default function  NavMenu  ({handleViewCart, quantity, total,
                                }) {
const  {data: session} = useSession()
    return(

         <div>
  <header className="navbar bg-teal-500">
  <div className="flex-1">
  <a href="/" className={`btn btn-ghost normal-case text-xl ${styles["nav-text"]}`}><Image width={25} height={25} style={{}} src="/assets/images/M.png"/>oTioN</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end w-100">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{quantity}</span>
        </div>
      </label>
      <div tabIndex={0} className={`${styles.dropdown} mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow`}>
        <div className="card-body">
       
          <span className="font-bold text-lg">{quantity} Items</span>
          <span className="text-info">Subtotal: {total}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={(handleViewCart)}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    {session ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/assets/images/basquiat.png" />
        </div>
      </label>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a href='/profile' className="justify-between">
            Profile
            <span></span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a href="/api/auth/signout?callbackUrl=/">Logout</a></li>
      </ul>

    </div>

    ):(
      <div className="flex-1">
    <a href="/api/auth/signin" className='btn btn-ghost normal-case text-xl'>Log In</a>
  </div>
     )}
  </div>
  </header>
</div>


   
    )
  }


