import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContect'
import { useState } from 'react'

const Doctors = () => {
  const {speciality} = useParams()
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)  
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality.toLowerCase() === speciality.toLowerCase()))
    }
    else{setFilterDoc(doctors)}
  }

  useEffect(()=>{
     applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600 '>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-500 text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filter</button>
        <div className={`flex flex-col gap-4 text-sm   text-gray-600 ${showFilter?'flex':'hidden sm:flex'}`}>
          <p onClick={()=>navigate('/doctors/General physician')} className={`${speciality==='General physician' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>General physician</p>
          <p onClick={()=>navigate('/doctors/Gynecologist')} className={`${speciality==='Gynecologist' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>Gynecologist</p>
          <p onClick={()=>navigate('/doctors/Dermatologist')} className={`${speciality==='Dermatologist' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>Dermatologist</p>
          <p onClick={()=>navigate('/doctors/Pediatricians')} className={`${speciality==='Pediatricians' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>Pediatricians</p>
          <p onClick={()=>navigate('/doctors/Neurologist')} className={`${speciality==='Neurologist' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>Neurologist</p>
          <p onClick={()=>navigate('/doctors/Gastroenterologist')} className={`${speciality==='Gastroenterologist' ? 'bg-indigo-100 text-black' : ""} 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>{
              console.log('====================================');
              console.log(item);
              console.log('====================================');
                return (
                  
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Avalable</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Doctors
