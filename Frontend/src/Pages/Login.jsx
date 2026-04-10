import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [state,setState]=useState('sign up')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [name,setName] = useState('')
  const {register, login, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmitHandler = async(event) => {
      event.preventDefault();
      try {
    if (state === 'sign up') {
      // REGISTER
      await register(name, email, password)
      alert('Registration successful')
      setState('login') // switch to login after register
    } else {
      // LOGIN
      const data = await login(email, password)
      alert('Login successful')
      navigate('/')
    }
  } catch (error) {
    alert(error.response?.data?.message || 'Something went wrong')
  }
  }
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'sign up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'sign up' ? 'sign up' : 'log in'} to book appointments</p>
        {
          state === 'sign up' && <div className='w-full '>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
        </div>
        }
        {/* <div className='w-full '>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
        </div> */}
        <div className='w-full '>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition-all duration-250'>{state === 'sign up' ? 'sign up' : 'log in'}</button>
        {
          state === 'sign up' ? <p className='text-center'>Already have an account? <span onClick={()=>{setState('login')}}  className='text-blue-500 cursor-pointer'>Login</span></p> : <p className='text-center'>Don't have an account? <span onClick={()=>setState('sign up')} className='text-blue-500 cursor-pointer'>Sign Up</span></p>
        }
      </div>
    </form>
  )
}

export default Login
