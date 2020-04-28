import axios from 'axios'
import { getToken } from './tokenHandling'

const base = 'http://winebored.herokuapp.com'

const headerDeets = () => {
  return ({ 
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const getAllWines = () => {
  return axios.get(`${base}/wines`)
}

export const getOneWine = (wineId) => {
  return axios.get(`${base}/wines/${wineId}`)
}


export const addNewWine = (wineInfo) => {
  return axios.post('http://winebored.herokuapp.com/wines', wineInfo, headerDeets() )
}

export const editWine = (wineInfo, wineId) => {
  return axios.put(`http://winebored.herokuapp.com/wines/${wineId}`, wineInfo, headerDeets() )
}

export const deleteWine = (wineId) => {
  return axios.delete(`${base}/wines/${wineId}`, headerDeets())
}



// -------------- User related functions ----------------- //

export const signUserUp = (userInfo) => {
  return axios.post(`${base}/register`, userInfo)
}

export const logUserIn = (userInfo) => {
  return axios.post(`${base}/login`, userInfo)
}