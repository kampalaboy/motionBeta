import { getServerSession } from "next-auth"
import { Options } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

const Member = async () => {
    const session = await getServerSession(Options)
if (!session){
    redirect('/api/auth/signin?callBackUrl=/Member')
}
return(
    <div>
    <h1>Member Session</h1>
    <p>{session?.user?.username} </p>
    <p>{session?.user?.role}</p>
    </div>
   
)
}
export default Member
