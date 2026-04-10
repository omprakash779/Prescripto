import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>
      <div className='flex my-10 flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg '>Our Office</p>
          <p className='text-gray-500 '>00000 Willms Station <br />
           Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Phone: (123) 456-7890 <br />Email: support@healthcare.com</p>
          <p className='font-semibold text-gray-600 text-lg'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
