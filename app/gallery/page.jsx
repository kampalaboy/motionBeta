"use client";

import React, { useState, useEffect, Suspense } from "react";
import NavMenu from "../components/navmenu";
import CardCarousel from "../components/carousel";
import Loading from "./loading";
import { GrGallery } from "react-icons/gr";
import { GiCash, GiOpenBook, GiPencil, GiStoneAxe } from "react-icons/gi";

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import styles from './shop.module.css';

export default function Gallery() {
  const [shouldShowContent, setShouldShowContent] = useState(false);

  useEffect(() => {
    // Check if we're on the client side before simulating the delay
    if (typeof window !== "undefined") {
      const delay = 3000;

      const timeoutId = setTimeout(() => {
        setShouldShowContent(true);
      }, delay);

      // Clear the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, []);

  if (!shouldShowContent) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <div>
          <NavMenu />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              margin: 0,
            }}
          >
            <img
              src="assets/images/GalleryHeader.webp"
              style={{ height: 150, width: 500 }}
            />
          </div>

          <header className="header text-center">
            <nav className="navbar text-center mt-4">
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                className="flex justify-center space-x-6 text-size-2"
              >
                <li>
                  <a href="/gallery/">
                    <GrGallery size={35} title="On Display" />
                  </a>
                </li>
                <li>
                  <a href="/gallery/">
                    <GiOpenBook size={35} title="Collections" />
                  </a>
                </li>
                <li>
                  <a href="/gallery/">
                    <GiPencil size={35} title="Drawings" />
                  </a>
                </li>
                <li>
                  <a href="/gallery/">
                    <GiStoneAxe size={35} title="Sculptures" />
                  </a>
                </li>
                <li>
                  <a href="/gallery/liveauction">
                    <GiCash size={35} title="Trade" />
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <div>
            <CardCarousel />
          </div>
        </div>
      </Suspense>
    </main>
  );
}
