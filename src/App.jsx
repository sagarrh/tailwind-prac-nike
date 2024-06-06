import React from 'react'
import { Nav } from './sections/Nav'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import { Customer } from './sections/Customer'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='relative'>
      <Nav></Nav>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero></Hero>
      </section>
      <section className='padding'>
        <PopularProducts></PopularProducts>
      </section>
      <section className='padding'>
        <SuperQuality></SuperQuality>
      </section>
      <section className='padding'>
        <Services></Services>
      </section>
      <section className='padding'>
        <SpecialOffer></SpecialOffer>
      </section>
      <section className='bg-pale-blue padding '>
        <Customer></Customer>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe></Subscribe>
      </section>
      <section className='bg-black padding-x padding-t pd-8'>
       <Footer></Footer>
      </section>
    </main>
  )
}

export default App