import Bidder from "@/app/(models)/User";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json()
        const userData = body.formData

        if (!userData?.username){
            return NextResponse.json({message: "All fields required"}, {status: 400})
        }

        const duplicate = await User.findOne({username: userData.username})
            .lean()
            .exec()

            if (duplicate){
                return NextResponse.json({message: "Duplicate username"}, {status: 409})  
            }else{

            }
            await Bidder.create(userData)

            return NextResponse.json({message: "User Created"}, {status: 201})  
    }catch(error){
        console.log(err)
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}