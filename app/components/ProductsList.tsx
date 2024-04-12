import React from 'react'
import { IProduct } from '../interfaces'

interface ProductsListProps {
  products: IProduct[]
  addToCart: (product: IProduct) => void
}

const ProductsList = ({ products, addToCart }: ProductsListProps) => {
  // console.log(products)
  return (
    <div className='flex justify-center mt-20'>
      <div className='rounded-lg '>
        <p className='text-[#000000]'>Добавленные товары</p>
        <div className='flex gap-5'>
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className='w-[300px] rounded p-5 text-black bg-[#D9D9D9]'
              >
                <p>Название</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p className='mt-5'>Цена: {product.price}</p>
                <div
                  className='mt-5 py-2 px-4 rounded-lg bg-[#222222] text-white text-center cursor-pointer'
                  onClick={() => addToCart(product)}
                >
                  Купить
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
