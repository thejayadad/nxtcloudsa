'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Navbar = () => {
    const {data: session, status} = useSession()
    console.log("Session " + session)
  return (
    <div>Navbar<br/>
        <span>email: { session.user.email}</span>
    </div>
  )
}

export default Navbar