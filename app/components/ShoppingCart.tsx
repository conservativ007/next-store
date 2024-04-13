'use client'

import React, { useEffect, useState } from 'react'
import { IGetProducts, IProduct } from '../interfaces'
import axios from 'axios'
import ProductsList from './ProductsList'
import Cart from './Cart'

export const ShoppingCart = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const URL = 'http://o-complex.com:1337/products?page=1&page_size=3'

    const getProducts = async () => {
      try {
        const response = await axios.get<IGetProducts>(URL, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        setProducts(response.data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    getProducts()
  }, [])

  return (
    <div className='mb-20'>
      <Cart />
      <ProductsList products={products} />
    </div>
  )
}
