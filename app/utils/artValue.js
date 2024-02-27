export  function ArtPrice() {
    let period = 0;
    let cfv = 0;

    const artPieces = [
        { id: 1, artist:'Kwame Ayepa', name:'Guardian Angel', exhibitions: 50, date: 1582695790000, articles: 50, sales: 50000, 
          followers: 50000, release: 48, len:150, wid:100, image:'/assets/images/gallery/GaurdianAngel.webp' },

        { id: 2, artist:'Kwame Ayepa', name:'Guardian Angel', exhibitions: 2,  date: 1677390190000, articles: 0, sales: 500, 
          followers: 5000, release: 365, len:100, wid:70, image:'/assets/images/gallery/GaurdianAngel.webp' },

        { id: 3, artist:'Kwame Ayepa', name:'Guardian Angel', exhibitions: 20, date: 1693028590000, articles: 20, sales: 20000, 
          followers: 20000, release: 180, len:125, wid:125,image:'/assets/images/gallery/GaurdianAngel.webp' },

          { id: 4, artist:'Kwame Ayepa', name:'Guardian Angel', exhibitions: 20, date: 1693028590000, articles: 20, sales: 20000, 
          followers: 20000, release: 180, len:125, wid:125,image:'/assets/images/gallery/GaurdianAngel.webp' },

          { id: 5, artist:'Kwame Ayepa', name:'Guardian Angel', exhibitions: 20, date: 1693028590000, articles: 20, sales: 20000, 
          followers: 20000, release: 180, len:125, wid:125,image:'/assets/images/gallery/GaurdianAngel.webp' }
    ];

    const calculateC = (ex, at, sl, fo) => {
        ex = Math.max(1, Math.min(100, ex));
        at = Math.max(1, Math.min(100, at));
        sl = Math.max(1000, Math.min(100000, sl));
        fo = Math.max(1000, Math.min(100000, fo));

       const  e = ex / 1;
       const  a = at / 1;
       const  s = sl / 500;
       const  f = fo / 1000;

       const  y = e + a + s + f;

       const  c = Math.min(0.3, y / 1000);
        return c;
    };

    const price = (c) => {
        let totalP = 0;  // Initialize a variable to accumulate the total p value
    
        for (let i = 0; i < artPieces.length; i++) {
            const l = artPieces[i].len;
            const w = artPieces[i].wid;
            
            const p = (l + w) * c * 21;
            totalP += p;
        }
        return totalP;
    };
    const futureValue = (c) => {
        const p = price(c);
        
        for (let i = 0; i < artPieces.length; i++) {
            const deltaAtC = p * Math.pow(1 + c, 1);
            const releaseDate = artPieces[i].date;
            const currentPeriod = new Date().getTime();
            const timeDifference = currentPeriod - releaseDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
            if (c <= 0.1 && currentPeriod > releaseDate) {
                period = daysDifference / 1;
            } else if (0.1 < c && c <= 0.2 && currentPeriod > releaseDate) {
                period = daysDifference / 90;
            } else if (0.2 < c && c <= 0.3 && currentPeriod > releaseDate) {
                period = daysDifference / 180;
            }
    
            const cfv = (p + deltaAtC * period)/1500;
            return cfv;
        }
    }

    //To test
    
    // const coEf = calculateC(artPieces[0].exhibitions, artPieces[0].articles, artPieces[0].sales, artPieces[0].followers )
    // const artPrice = price(coEf)
    // const bond = futureValue(artPrice, artPieces[0].release)
    // console.log([artPrice, bond])

    return { calculateC, price, futureValue, artPieces };
}

export default ArtPrice;
