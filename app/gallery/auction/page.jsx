"use client"
import { ArtPrice } from "../../utils/artValue"
import { useEffect, useState } from "react";
import Image  from 'next/image';

const Auction = () =>{

    const {calculateC, price, futureValue, artPieces}=ArtPrice();
    const [priceDisplay, setPriceDisplay]=useState([]);
    const [showArt, setShowArt]=useState(null);
    const [tradeArt, setTradeArt]=useState(null);
    
    useEffect(() => {
        // Assume you want to display prices for all artists
        const prices = artPieces.map((artist) => {
            const coEf = calculateC(artist.exhibitions, artist.articles, artist.sales, artist.followers);
            const currentPrice = price(coEf);
            const futurePrice = futureValue(currentPrice);
            const artistName = artist.artist
            const pieceName = artist.name
            return [currentPrice, futurePrice, artistName, pieceName ];
        });

        // Set the prices in the state
        setPriceDisplay(prices);
    }, []);

    const handleShowArt = (item) =>{
        setShowArt(item);
      }
    
      const handleCloseArt = () =>{
        setShowArt(null);
      }

      
    const handleTradeArt = (item) =>{
        setTradeArt(item);
      }
    
      const handleCloseTrade = () =>{
        setTradeArt(null);
      }

    return(
        <main className="min-h-screen">
            <div className="flex flex-col space-y-10 " >
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold text-green-600 color-gradient" style={{fontFamily: 'Roboto'}}>
                    Bidding
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-3">
            {priceDisplay.map((prices, index) => (
            <div key={index} className="lg:ml-3 lg:mr-3 mx-[50px]">
                     <div className="grid lg:grid-rows-3 grid-rows-1 gap-4 ">
                        <div className="space-y-1  bg-teal-800 border border-gray-200  rounded-lg p-2 flex-grow">
                            <div className="flex">
                            <p className="">Piece {index + 1}</p>:<p  className="px-2">{prices[3]}</p>
                            </div>
                            <div className=" flex">
                            <p  className="">Current Price</p>: <p className="px-2">${prices[0]}</p>
                            </div>
                            <div className=" flex">
                            <p className="">Future Price</p>:<p className="px-2"> ${prices[1]}</p>
                            </div>
                            <div className=" flex">
                            <p className="">Artist</p>:<p className="px-2">{prices[2]}</p>
                            </div>
                        </div>
                    <div className="flex mx-auto">
                        <div className="px-3">
                            <button onClick={handleShowArt} className="flex mx-auto btn bg-blue-400 w-[120px]">Place Bids</button>
                        </div>
                        <div>
                            <button onClick={handleTradeArt} className="flex mx-auto btn bg-green-400 w-[140px]">Place TRade</button>
                        </div>
                    </div>
                    
                </div>
            </div>
                ))}
            </div>
    {showArt && artPieces.map((piece, index)=>(
        <div className="fixed inset-0 z-50 w-53 flex items-center justify-center">
            <div className="modal modal-open">
            <div key={index} style={{paddingRight: 20 }} className="modal-box">
                <p className="text-xl font-semibold mb-4">{piece.name}</p>
                <div  className="form-control" >
                <Image width={350} height={350} src={piece.image} alt={piece.name} />
                </div>
                <div className="modal-action">
                
                <button className="btn btn-primary" onClick={handleCloseArt}>
                        Close
                </button>
                </div>
            </div>
            </div>
            </div>
        ))}

    {tradeArt && artPieces.map((piece, index)=>(
            <div className="fixed inset-0 z-50 w-53 flex items-center justify-center">
                <div className="modal modal-open">
                <div key={index} style={{paddingRight: 20 }} className="modal-box">
                    <p className="text-xl font-semibold mb-4">{piece.name}</p>
                    <div  className="form-control" >
                  
                    <Image className="opacity-20" width={350} height={350} src={piece.image} alt={piece.name} />
                    </div>
                    <div className="modal-action flex-col">
                    <div className="bg-yellow-200 mx-1 pb-2 rounded-lg">
                        <button className="btn bg-blue-500 outline outline-yellow-200 w-1/2" onClick={handleCloseTrade}>
                                Buy
                        </button>
                        <button className="btn bg-red-500 outline outline-yellow-200 w-1/2" onClick={handleCloseTrade}>
                                Sell
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary w-full" onClick={handleCloseTrade}>
                                Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            ))}
        
            </div>
            
        </main>
    )
} 
export default Auction