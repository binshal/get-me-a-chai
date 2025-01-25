"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardComp from '@/components/DashboardComp';


const Dashboard = () => {

  return (
    <div>
      <DashboardComp/>
    </div>
  )
}

export default Dashboard
