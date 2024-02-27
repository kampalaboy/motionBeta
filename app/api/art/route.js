import Art from '@/app/(models)/Art';
import { NextResponse } from 'next/server';

export async function POST(req) {
    if (req.method !== 'POST') {
      return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    }
  
    try {
      const body = await req.json();
  
      const newArt = new Art({
        artist: body.artist,
        exhibitions: body.exhibitions,
        articles: body.articles,
        sales: body.sales,
        followers: body.followers,
        release: body.release,
      });
  
      await newArt.save();
  
      return NextResponse.json({ message: 'Art Piece Added' }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error', error }, { status: 500 });
    }
  }

// export async function GET (){
//     try {
//         // Fetch the list of users from the database
//         const pieces = await Art.find({}).exec();
  
//         return NextResponse.json({ pieces }, { status: 200 });
//     } catch (error) {
//         console.error(error);
  
//         // Handle database errors or other errors
//         return NextResponse.json({ message: 'Error', error }, { status: 500 });
//     }
//   }