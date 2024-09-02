import axios from 'axios'

const request = axios.create({
    baseURL: '/',
    timeout: 100000
})

export default request

