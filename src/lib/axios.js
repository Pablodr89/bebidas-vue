import axios from 'axios'

let api = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

export default api