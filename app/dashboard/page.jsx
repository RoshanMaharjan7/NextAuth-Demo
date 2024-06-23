import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from 'react'

const DashBoard = async () => {

    const session = await getServerSession()

    if(!session){
        redirect('/')
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-green-400 border p-4">
            User Successfully Logged In, Here is your Dashboard
        </h1>
    </div>
  )
}

export default DashBoard