import axios from 'axios'
import { IReview } from '../interfaces'

export const fetchApi = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // console.log(response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
