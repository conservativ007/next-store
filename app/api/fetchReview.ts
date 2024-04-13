import axios from 'axios'
import { IReview } from '../interfaces'

export const fetchReview = async () => {
  const URL = 'http://o-complex.com:1337/reviews'

  try {
    const response = await axios.get(URL, {
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
