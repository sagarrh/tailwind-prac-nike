import React from 'react'
import ReviewCard from '../Components/ReviewCard'
import { reviews } from '../constants'

export const Customer = () => {
  return (
    <section className='max-container'>
    
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
     <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((a,index)=>(
        <ReviewCard
        imgURL={a.imgURL}
        customerName={a.customerName}
            rating={a.rating}
            feedback={a.feedback}
        />
      ))}
     </div>

    </section>
  )
}
