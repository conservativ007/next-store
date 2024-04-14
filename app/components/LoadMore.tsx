'use client'

import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces'
import ProductsList from './ProductsList'
import Cart from './Cart'
import Spinner from './Spinner'
import { useInView } from 'react-intersection-observer'
import { fetchProducts } from '../api/fetchProducts'

let page = 1

export const LoadMore = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      const getProducts = async () => {
        const data = await fetchProducts(page)

        if (data?.statusText === 'OK' && data.data) {
          setProducts((prev) => [...prev, ...data.data.products])
        }
      }

      getProducts()
      page += 1
    }

    console.log(42)
  }, [inView])

  return (
    <div className='sm:w-11/12 md:w-4/5 max-w-[1000px] m-auto mb-20'>
      <ProductsList products={products} />
      <div ref={ref}>
        <Spinner />
      </div>
    </div>
  )
}
