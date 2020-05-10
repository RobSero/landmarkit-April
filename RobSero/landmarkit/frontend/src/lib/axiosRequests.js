import axios from 'axios'

export const getAllBuildings = () => {
  return axios.get('/api/buildings')
}

export const getOneBuilding = (id) => {
  return axios.get(`/api/buildings/${id}`)
}