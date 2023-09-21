import React from 'react'
import { Metadata } from 'next'
import Login from '../../../components/Auth/Login'

 
export const metadata: Metadata = {
  title: 'Upwork Login - Log in to your Upwork accountNext App',
  description: 'Log in to your Upwork account'
}
 
export default function page() {
  return (
    <main className='py-8 px-6 md:px-[80px] mx-auto'>
      <Login/>
    </main>
  )
}
