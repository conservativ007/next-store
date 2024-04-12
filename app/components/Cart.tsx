import React from 'react'
import { ICartItem } from '../interfaces'

interface ICart {
  cartItems: ICartItem[]
}

const Cart = ({ cartItems }: ICart) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.title} x{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
