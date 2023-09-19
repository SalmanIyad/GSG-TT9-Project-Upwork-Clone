import React from 'react'
import { Metadata } from 'next'
import Signup from '../../components/Auth/Signup'

 
export const metadata: Metadata = {
  title: 'Create an Account - Upwork',
  description: 'Upwork is where the world goes to work! We are a leading online workplace,           where savvy businesses hire, manage, and pay an on-demand workforce of talented freelancers.'
}
 
export default function page() {
  return (
    <main className='py-8 sm:px-6 md:px-[80px] mx-auto'>
      <Signup/>
    </main>
  )
}
