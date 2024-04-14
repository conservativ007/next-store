import axios from 'axios'
import { IGetProducts } from '../interfaces'

export const fetchProducts = async (page: number) => {
  const URL = `http://o-complex.com:1337/products?page=${page}&page_size=3`

  try {
    const response = await axios.get<IGetProducts>(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
