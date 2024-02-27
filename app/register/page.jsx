import BidForm from "@/app/components/bidForm";


export default function CreateTrader(){
    return(
        <main className="min-h-screen">

        <h1 className=" pt-2 flex justify-center font-size-50px font-bold">
            Become A Trader! 💹 💰 🏛️ 
        </h1>

            <div style={{display:'flex',
                     justifyContent:'center', 
                      paddingTop: 50,}} >
                <BidForm/>
            </div>
        </main>
       
    )
}