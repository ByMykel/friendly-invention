import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const login = async (user: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    user,
    password,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const getWelcomeMessage = async () => {
  const response = await axios.get(`${BASE_URL}/getWelcomeMessage`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })

  return response.data.response
}

export const sendMessage = async (userMessage: string) => {
  const response = await axios.post(
    `${BASE_URL}/sendMessage`,
    {
      message: userMessage
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }
  )

  return response.data.response
}
