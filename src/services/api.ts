import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tmj-hackaton-api.herokuapp.com/api'
})

export default api
