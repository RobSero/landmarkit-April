import axios from 'axios'
import {getToken} from './authRequests'

const headerInfo = () => {
  return ({ 
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}


// ------------------- BUILDING HANDLING ------------------- //


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

export const getLocation = (buildingName) => {
  buildingName = buildingName.replace(' ', '%20')
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${buildingName}.json?limit=1&access_token=pk.eyJ1Ijoicm9ic2VybyIsImEiOiJja2E1bWRqMWwwMWluM2tteHF2NWxiMmVoIn0.I-ctEpFbld_cD10Twj2I1Q&language=en`)
}



// ------------------- COMMENT HANDLING ------------------- //

export const createComment = (buildingId, body) => {
  return axios.post(`/api/buildings/${buildingId}/comments`, body, headerInfo() )
}

export const deleteComment = (buildingId, commentId) => {
  return axios.delete(`/api/buildings/${buildingId}/comments/${commentId}`, headerInfo() )
}