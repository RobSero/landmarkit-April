import axios from 'axios'

const base = 'http://winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${base}/wines`)
}

export const getOneWine = (wineId) => {
  return axios.get(`${base}/wines/${wineId}`)
}