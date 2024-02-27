"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CardCarousel() {

    
    const Images = [
    { id: 1, name: 'Guardian Angel', image:'assets/images/gallery/GaurdianAngel.webp'},
    { id: 2, name: 'We Used To Be Kings ', image: 'assets/images/gallery/BrainOfGod.webp' },
    { id: 3, name: 'The Birth Of Light',image: 'assets/images/gallery/LetThereBeLight.webp'  },
    { id: 4, name: 'The Face of War',image:  'assets/images/gallery/Sketchy.webp'  },
    { id: 5, name: 'A Portal Home',  image:  'assets/images/gallery/Lucy.webp'  },
    { id: 6, name: 'Ggulawo Amaaso', image:'assets/images/gallery/Eye.jpg'},
    { id: 7, name: 'Halls of Armenti',image: 'assets/images/gallery/Mother.jpg'  },
    { id: 8, name: 'The Dark Side Of the Moon',image:  'assets/images/gallery/Rock.jpg'  },
    { id: 9, name: 'Blind Faith',  image:  'assets/images/gallery/Trumpet.jpg'  },
    { id: 10, name: "Oshun's Last Meal",  image:  'assets/images/gallery/Sushi.jpg'  },
  // Add more card items as needed
    ];

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Images.map((image)=>
        <SwiperSlide key={image.id}>
          <img src={image.image} />
          <div  className="flex mx-auto"
                style={{display:'flex',
                       justifyContent: 'center',
                       padding:20}}>
            <button className="btn">{image.name}</button>
          </div>
        </SwiperSlide>
        )}
      </Swiper>
      
    </>
    
  );
}
