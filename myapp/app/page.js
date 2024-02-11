'use client'
import React, {useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle'



const HomePage = () => {
  const {data: session} = useSession()
  const router = useRouter()
  useEffect(() => {
    if(session) {
      router.replace('/dashboard')
    }
  }, [session, router])
  return (
    <div className='flex flex-col'>HomePage
      <LoginWithGoogle />
    </div>
  )
}

export default HomePage