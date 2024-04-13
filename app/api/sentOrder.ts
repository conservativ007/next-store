import axios from 'axios'

export const sentOrder = async (body: any) => {
  const URL = 'http://o-complex.com:1337/order'

  try {
    return axios
      .post(URL, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response)
  } catch (error) {
    console.log(error)
  }
}
