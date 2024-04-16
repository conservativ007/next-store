import React, { useState } from 'react'
import { IProduct } from '../interfaces'
import { useCartStore } from '../store/cartStore'
import Image from 'next/image'

interface ProductsListProps {
  products: IProduct[]
}

interface PurchasedProducts {
  [id: number]: boolean
}

const ProductsList = ({ products }: ProductsListProps) => {
  const { add, increment, decrement, getQuantityOfProduct, setCustomValue } =
    useCartStore((state) => state)
  const [purchasedProducts, setPurchasedProducts] = useState<PurchasedProducts>(
    {},
  )

  const [inputTexts, setInputTexts] = useState<{ [id: number]: number }>({})

  const inputHandle = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: number,
  ) => {
    const value = e.target.value

    setInputTexts((prev) => ({
      ...prev,
      [productId]: Number(value),
    }))

    setCustomValue(productId, Number(value))
  }

  const buyHandleClick = (product: IProduct) => {
    add({ product, quantity: 1 })
    setPurchasedProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }))
    setInputTexts((prev) => ({
      ...prev,
      [product.id]: 1,
    }))
  }

  const incrementHandleClick = (productId: number) => {
    increment(productId)
    setInputTexts((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }))
  }

  const decrementHandleClick = (productId: number) => {
    decrement(productId)
    setInputTexts((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1,
    }))
  }

  return (
    <div className='md:mx-0 flex justify-center mt-20 mx-10'>
      <div className='flex flex-wrap justify-center gap-5'>
        {products.map((product) => {
          const isPurchased = purchasedProducts[product.id]
          return (
            <div
              key={product.id}
              className='sm:w-full w-[293px] rounded p-5 text-black bg-[#D9D9D9] flex flex-col justify-between'
            >
              <div className=''>
                <Image
                  src={product.image_url}
                  width={255}
                  height={50}
                  alt='card-image'
                  className='rounded m-auto'
                />
                <p className='text-2xl text-center my-2'>Название</p>
                <p>{product.title}</p>
                <p>{product.description.slice(0, 100)}</p>
              </div>
              <div>
                <p className='mt-5 text-center text-2xl'>
                  Цена:{' '}
                  {product.price * Number(getQuantityOfProduct(product.id)) ||
                    product.price}
                  ₽
                </p>
                <div className='mt-5 py-2 px-4 rounded-lg  text-white text-center cursor-pointer'>
                  {isPurchased ? (
                    <div className='flex justify-center gap-3 text-2xl'>
                      <p
                        className='px-3 text-3xl bg-[#222222] rounded'
                        onClick={() => decrementHandleClick(product.id)}
                      >
                        -
                      </p>
                      <input
                        value={inputTexts[product.id] || 1}
                        onChange={(e) => inputHandle(e, product.id)}
                        type='text'
                        className='max-w-20 bg-[#222222] rounded text-center'
                      />
                      <p
                        className='px-3 text-3xl bg-[#222222] rounded'
                        onClick={() => incrementHandleClick(product.id)}
                      >
                        +
                      </p>
                    </div>
                  ) : (
                    <div
                      className='bg-[#222222] rounded-md py-2'
                      onClick={() => buyHandleClick(product)}
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
  )
}

export default ProductsList
