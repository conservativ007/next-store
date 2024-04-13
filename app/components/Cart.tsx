import React from 'react'
import { useCartStore } from '../store/cartStore'
import { InputMask } from '@react-input/mask'
import CustomInputMask from './CustomInputMask'

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems)

  return (
    <div className='mt-10 flex flex-col items-center '>
      <ul className='bg-[#D9D9D9] text-[#222222] py-3 px-5 rounded-xl'>
        <li className='text-3xl mb-5'>Добавленные товары</li>
        {cartItems.map((item) => (
          <li key={item.product.id} className='flex mt-1'>
            <p className='basis-1/2'>{item.product.title}</p>
            <p className='basis-1/12 ml-20'>x{item.quantity}</p>
            <p className='basis-1/12'>{item.product.price * item.quantity}₽</p>
          </li>
        ))}
        <li className='text-black'>
          <CustomInputMask />
        </li>
      </ul>
    </div>
  )
}

export default Cart
