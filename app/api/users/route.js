import User from "@/app/(models)/User";
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
            await User.create(userData)

            return NextResponse.json({message: "User Created"}, {status: 201})  
    }catch(error){
        console.log(err)
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}

export async function GET (){
    try {
        // Fetch the list of users from the database
        const users = await User.find({}).exec();

        // Return the list of users in the response
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        console.error(error);

        // Handle database errors or other errors
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    }
}