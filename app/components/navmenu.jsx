"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function NavMenu({
  handleViewCart,
  quantity,
  total,
  totalBidDiv,
}) {
  const { data: session } = useSession();
  return (
    <div>
      <header className="navbar bg-teal-500">
        <div className="flex-1">
          <a href="/" className={`btn btn-ghost normal-case text-xl`}>
            <Image
              width={55}
              height={55}
              alt={"AA"}
              style={{}}
              src="/assets/images/AA.png"
            />
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end w-100">
            {totalBidDiv}

            <div
              tabIndex={0}
              className={`mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow`}
            >
              <div className="card-body">
                <span className="font-bold text-lg">{quantity} Items</span>
                <span className="text-info">Subtotal: {total}</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={handleViewCart}
                  >
                    View cart
                  </button>
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

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/profile" className="justify-between">
                    Profile
                    <span></span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="/api/auth/signout?callbackUrl=/">Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex-1">
              <a
                href="/api/auth/signin"
                className="btn btn-ghost normal-case text-xl"
              >
                Log In
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
