"use client"

import  NavMenu  from './components/navmenu';
import styles from "./home.module.css"
import Link from 'next/link'
import Head from 'next/head';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {

  return(
<main className="min-h-screen ">
<Suspense fallback={<Loading/>  }>
<NavMenu quantity={0} 
        cartItems={[]}  />
     <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Calligraffitti"
        />
      </Head>
    <div className=" p-3 flex-1 text-center text-5xl">
        <p style={{fontFamily: 'Calligraffitti'}} >Elevate Your Mind</p>
    </div>

<div className={styles["iframe-container"]}>
<div className={styles["iframe-wrapper"]}>
    <Link href="/paintings" className={styles["iframe-link"]}>
        <div className={styles["iframe-content"]}>
            <img src="assets/images/M.png" alt="Shop For Art" />
            <div className={styles["iframe-text"]}>
                <p>Paintings</p>
            </div>
        </div>
    </Link>
</div>
<div className={styles["iframe-wrapper"]}>
    <Link href="/accessories" className={styles["iframe-link"]}>
        <div className={styles["iframe-content"]}>
            <img src="assets/images/accessories.png" alt="Accessories" />
            <div className={styles["iframe-text"]}>
                <p>Accessories</p>
            </div>
        </div>
    </Link>
</div>
</div>
<footer>
    <div className={styles["footer-text"]}>
   Elevate Your Life
    </div>
    <div  className={styles["footer-text-motion"]} >
    &copy; {new Date().getFullYear()} MoTioN Inc
    </div>
</footer>
</Suspense>
    </main>
  )
}


