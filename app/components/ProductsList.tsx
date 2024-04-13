import React, { useState } from 'react'
import { IProduct } from '../interfaces'
import { useCartStore } from '../store/cartStore'
import Image from 'next/image'

interface ProductsListProps {
  products: IProduct[]
  // addToCart: (product: IProduct) => void
}

interface PurchasedProducts {
  [id: number]: boolean
}

const ProductsList = ({ products }: ProductsListProps) => {
  const { add, increment, decrement, findProductById } = useCartStore(
    (state) => state,
  )
  const [purchasedProducts, setPurchasedProducts] = useState<PurchasedProducts>(
    {},
  )

  const handleClick = (product: IProduct) => {
    add({ product, quantity: 1 })
    setPurchasedProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }))
  }
  // console.log(products)
  return (
    <div className='flex justify-center mt-20'>
      <div className='rounded-lg '>
        <div className='flex gap-5'>
          {products.map((product) => {
            const isPurchased = purchasedProducts[product.id]
            return (
              <div
                key={product.id}
                className='w-[300px] rounded p-5 text-black bg-[#D9D9D9] flex flex-col justify-between'
              >
                <div>
                  <Image
                    src={product.image_url}
                    width={300}
                    height={50}
                    alt='card-image'
                    className='rounded'
                  />
                  <p className='text-2xl text-center my-2'>Название</p>
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p className='mt-5 text-center text-2xl'>
                    Цена:{' '}
                    {product.price *
                      Number(findProductById(product.id)?.toString()) ||
                      product.price}
                    ₽
                  </p>
                  <div className='mt-5 py-2 px-4 rounded-lg  text-white text-center cursor-pointer'>
                    {isPurchased ? (
                      <div className='flex justify-center gap-3 text-2xl'>
                        <p
                          className='px-3 text-3xl bg-[#222222] rounded'
                          onClick={() => decrement(product.id)}
                        >
                          -
                        </p>
                        <input
                          value={findProductById(product.id)?.toString()}
                          type='text'
                          className='max-w-20 bg-[#222222] rounded text-center'
                        />
                        <p
                          className='px-3 text-3xl bg-[#222222] rounded'
                          onClick={() => increment(product.id)}
                        >
                          +
                        </p>
                      </div>
                    ) : (
                      <div
                        className='bg-[#222222] rounded-md py-2'
                        onClick={() => handleClick(product)}
                      >
                        Купить
                      </div>
                    )}
                  </div>
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
