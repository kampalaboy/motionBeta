"use client"

import { useSession } from "next-auth/react"
export default async function Profile () {

    const  {data: session} = useSession()

    return (
        <main>
            <div className="min-h-screen">
                <h1>Profile</h1>
                <p>{session?.user?.name} </p>
                <p>{session?.user?.role}</p>
            </div>
        </main>
    );
};