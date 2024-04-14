'use client'

import React, { useEffect, useState } from 'react'
import { IGetProducts, IProduct } from '../interfaces'
import axios from 'axios'
import ProductsList from './ProductsList'
import Cart from './Cart'
import Spinner from './Spinner'
import { useInView } from 'react-intersection-observer'

let page = 1

export const ShoppingCart = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      const URL = `http://o-complex.com:1337/products?page=${page}&page_size=3`

      const getProducts = async () => {
        try {
          const response = await axios.get<IGetProducts>(URL, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          setProducts((prev) => [...prev, ...response.data.products])
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }

      getProducts()
      page += 1
    }

    console.log(42)
  }, [inView])

  return (
    <div className='sm:w-11/12 md:w-4/5 m-auto mb-20'>
      <Cart />
      <ProductsList products={products} />
      <div ref={ref}>
        <Spinner />
      </div>
    </div>
  )
}
