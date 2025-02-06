import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col justify-between items-center min-h-screen px-4'>
      <Header/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default page