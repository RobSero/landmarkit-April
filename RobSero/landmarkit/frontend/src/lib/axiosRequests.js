import axios from 'axios'
import {getToken} from './authRequests'

const headerInfo = () => {
  return ({ 
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}



export const getAllBuildings = () => {
  return axios.get('/api/buildings')
}

export const getOneBuilding = (id) => {
  return axios.get(`/api/buildings/${id}`)
}

export const createBuilding = (body) => {
  return axios.post('/api/buildings', body, headerInfo() )
}

export const deleteBuilding = (id) => {
  return axios.delete(`/api/buildings/${id}`, headerInfo() )
}