import axios from 'axios'

export const fetchReview = async () => {
  const URL = 'http://o-complex.com:1337/reviews'

  try {
    const response = await axios.get(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
