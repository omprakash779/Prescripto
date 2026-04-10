import React,{useContext} from 'react'
import { AppContext } from '../Context/AppContect'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0,3).map((item,index)=>{
            return <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                 <img className='w-32 bg-indigo-50' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm font-medium text-neutral-700'>Date & time</span>25, july, 2024 | 8.30pm</p>
              </div>
              <div>

              </div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-center hover:bg-blue-500 hover:text-white transition-all duration-300 text-stone-500 sm:min-w-45 py-2 border rounded'>Pay Online</button>
                <button className='text-sm text-center hover:bg-red-600 hover:text-white transition-all duration-300 text-stone-500 sm:min-w-45 py-2 border rounded'>Cancel Appointment</button>
              </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default MyAppointments
