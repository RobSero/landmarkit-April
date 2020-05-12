import axios from 'axios'

export const registerUser = (userInfo) => {
  return axios.post('/api/register', userInfo)
}

export const loginUser = (userInfo) => {
  return axios.post('/api/login', userInfo)
}

export const logout = () => {
  return window.localStorage.removeItem('token')
}

export const setToken = (token) => {
  return window.localStorage.setItem('token', token)
}

export const getToken = (token) => {
  return window.localStorage.getItem('token')
}

export const getPayload = () => {
  const token = getToken()
  if(!token) {
    return false
  }

  const parts = token.split('.')
  if(!parts.length === 3) {
    return false
  }
  return JSON.parse(window.atob(parts[1]))
}

export const isUser = (id) => {
  const userId = getPayload().sub
  return userId === id
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if(!payload){
    console.log('NO AUTH!')
    return false
  }
  else {
    const now = Math.random(Date.now() / 1000)
    console.log('AUTHENTICATED NICE!')
    return now < payload.exp
  }
}

