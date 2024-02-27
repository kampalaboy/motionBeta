"use client"

import React, {useState, useEffect, Suspense} from 'react';
import NavMenu from '../components/navmenu';
import CardCarousel from '../components/carousel';
import Loading from './loading';
import { GrGallery} from 'react-icons/gr'
import { GiCash, GiOpenBook, GiPencil, GiStoneAxe } from 'react-icons/gi'


// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import styles from './shop.module.css';



export default function Gallery(){

  const [shouldShowContent, setShouldShowContent] = useState(false);
  
  useEffect(() => {
    // Check if we're on the client side before simulating the delay
    if (typeof window !== 'undefined') {
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
     
      <Suspense fallback={<Loading/>}>
      <div>

        <NavMenu quantity={0} />
          

          <div style={{  
                      display:'flex',
                      justifyContent:'center',
                      alignSelf:'center',
                      margin:0 }}>
                  <img src='assets/images/GalleryHeader.webp'
                         style={{height:150 , width:500}}      
                  />
             </div>

          <header className="header text-center">

                <nav className="navbar text-center mt-4">
                    <ul style={{display:'flex', justifyContent:'center', alignSelf:'center'}} className="flex justify-center space-x-6 text-size-2">

                        <li ><a href="/gallery/"><GrGallery size={35} title='On Display'/></a></li>
                        <li><a href="/gallery/"><GiOpenBook size={35} title='Collections'/></a></li>
                        <li><a href="/gallery/"><GiPencil size={35} title='Drawings'/></a></li>
                        <li><a href="/gallery/"><GiStoneAxe size={35} title='Sculptures'/></a></li>
                        <li><a href="/gallery/auction"><GiCash size={35} title='Trade'/></a></li>
                        <li className="text-2xl"><a href="/register">Register</a></li>
                   </ul>
                </nav>
            </header>

            <div>
            <CardCarousel/>
            </div> 
          
            </div>
      </Suspense>
     
    </main>
    
  );
}


{/* 
export default function Shop() {

    const itemList = [
        { id: 1, name: 'Guardian Angel', image:'/images/MotionBlack.jpg' },
        { id: 2, name: 'Brain of God ', image: '/images/MotionSilver.jpg' },
        { id: 3, name: 'Let there be Light',image: '/images/MotionGold.jpg' },
        { id: 4, name: 'Me, Myself',image: '/images/BrownDress.jpg' },
        { id: 5, name: 'Far Away',  image: '/images/picasso.webp' },
        { id: 6, name: '4/20', image: '/images/picasso.webp'},
      ];

      const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000',
     
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px',
      }
      const slideImages = [
        {
          src: '/images/gallery/GuardianAngel.jpg',
          caption: 'Guardian Angel'
        },
        {
          src: '/images/gallery/LetThereBeLight.jpg',
          caption: 'Let There Be Light!'
        },
        {
          src: '/images/gallery/BrainOfGod.jpg',
          caption: 'Brain of God'
        },
      ];
  
  return (
    <main className="min-h-screen ">
        <div>

          <div className="w-full sticky top-0 bg-white shadow-md">
          <NavMenu quantity={0} />
          </div>

          <div style={{  
                      display:'flex',
                      justifyContent:'center',
                      alignSelf:'center',
                      margin:0 }}>
                  <img src='/images/GalleryHeader.png'
                         style={{height:150 , width:500}}      
                  />
             </div>

          <header className="header text-center">
                <nav className="navbar text-center mt-4">
                    <ul className="flex justify-center space-x-8 font-style-bold">
                        <li><a href="/gallery/">Paintings</a></li>
                        <li><a href="/gallery/drawings">Drawings</a></li>
                        <li><a href="/gallery/sculp">Sculptures</a></li>
                    </ul>
                </nav>
            </header>

             


          <div className="slide-container py-20 px-9">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className={styles["slide-image"]} style={{ ...divStyle,  'backgroundImage': `url(${slideImage.src})` }}>
                <span> 
                   <button className="btn btn-primary">{slideImage.caption}</button> 
                </span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>   
    </main>
    
  );
} */}


