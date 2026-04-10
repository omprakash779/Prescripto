import { createContext, useState, useEffect } from 'react'
import api from '../Utils/api.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // load user from localStorage
  useEffect(() => {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      setUser(JSON.parse(userInfo))
    }
  }, [])

  //  LOGIN
   const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })

    setUser(data.user)
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', data.token)
  }

  //  REGISTER
  const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password })
    return data
  }

  //  LOGOUT
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
