// pages/api/send-order.js

import Order from '@/app/(models)/Order';
import { NextResponse } from 'next/server';
// import decrypt from '../../components/cypto';

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();

    const newOrder = new Order({
      cartItems: body.cartItems,
      userName: body.userName,
      phoneNumber: body.phoneNumber,
      area: body.area,
    });

    await newOrder.save();

    return NextResponse.json({ message: 'Order Created' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET (){
  try {
      // Fetch the list of users from the database
      const orders = await Order.find({}).exec();

      // const decryptedOrders = orders.map((order) => ({
      //   ...order.toObject(),
      //   phoneNumber: decrypt(order.encryptedPhoneNumber),
      //   area: decrypt(order.encryptedArea),
      // }));

      // Return the list of users in the response
      return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
      console.error(error);

      // Handle database errors or other errors
      return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}