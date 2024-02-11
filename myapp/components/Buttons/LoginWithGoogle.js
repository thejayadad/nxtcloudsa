'use client'
import { signIn } from "next-auth/react"
import {FaGoogle} from "react-icons/fa"

import React from 'react'

const LoginWithGoogle = () => {
  return (
    <button
    onClick={() => signIn('google')}
    className=""
    >
        <FaGoogle />
        <span>Sign In With Google</span>
    </button>
  )
}

export default LoginWithGoogle