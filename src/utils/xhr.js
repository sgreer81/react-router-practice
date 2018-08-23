import axios from 'axios'

// Instance
const xhr = axios.create({
  baseURL: `http://localhost:3000`
})

// Middleware
xhr.interceptors.response.use(response => {
  return response.data
}, error => {
  if (!error.response) return Promise.reject(error.message)
  const { status, data } = error.response

  return Promise.reject({ status, message: data })
})

export default xhr
