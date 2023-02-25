import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const login = async (user: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    user,
    password
  })

  return response.data
}

export const getWelcomeMessage = async () => {
  const response = await axios.get(`${BASE_URL}/getWelcomeMessage`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  })

  return response.data
}

export const sendMessage = async (userMessage: string) => {
  const response = await axios.post(
    `${BASE_URL}/sendMessage`,
    {
      message: userMessage
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    }
  )

  return response.data
}