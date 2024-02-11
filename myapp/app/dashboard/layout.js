import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout