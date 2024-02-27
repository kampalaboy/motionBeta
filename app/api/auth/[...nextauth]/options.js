import Bidder from "@/app/(models)/Bidder";
import User from "@/app/(models)/User";
import  CredentialsProvider  from "next-auth/providers/credentials";

const Options = {
   providers : [
        CredentialsProvider({
            name: "MoTioN ID",
            credentials: {
                username:{
                    label: "UserName:",
                    type: "text",
                    placeholder: "#motion", 
                }
            },
            async authorize(credentials){
                try{
                    const foundUser = await User.findOne({username: credentials.username})
                        .lean()
                        .exec()
                        if (foundUser){
                            console.log("Found User")
                            foundUser.role='Motion User'
                        return foundUser
                        }
                        
                }catch(error){
                    console.log(error)
                }
                return null;
            },
        }),

        CredentialsProvider({
            name: "Trader",
            credentials: {
                username:{
                    label: "TradingName:",
                    type: "text",
                    placeholder: "*motion", 
                }
            },
            async authorize(credentials){
                try{
                    const foundUser = await Bidder.findOne({username: credentials.username})
                        .lean()
                        .exec()
                        if (foundUser){
                            console.log("Found User")
                            foundUser.role='Motion Trader'
                        return foundUser
                        }
                        
                }catch(error){
                    console.log(error)
                }
                return null;
            },
        }),
    ],

    callbacks:{
    async jwt({token, user}){ 
    if (user)  token.role = user.role
        return token
    },
    async session({session, token}){
        if (session?.user) session.user.role = token.role;
        return session
    },
  }
} 

export default Options;
