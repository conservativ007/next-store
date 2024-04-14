import {
  InputMask,
  MaskEventDetail,
  MaskEventHandler,
  ModifiedData,
  Modify,
} from '@react-input/mask'
import React, { useState } from 'react'
import { useCartStore } from '../store/cartStore'
import { IOrder } from '../interfaces'
import { sentOrder } from '../api/sentOrder'
import { usePopUpStore } from '../store/popUpStore'

const CustomInputMask = () => {
  const [detail, setDetail] = useState<MaskEventDetail | null>(null)
  const [numberIsCorrect, setNumberIsCorrect] = useState(true)

  const { cartItems } = useCartStore((state) => state)
  const { chageShow } = usePopUpStore((state) => state)

  const handleMask: MaskEventHandler = (event) => {
    setDetail(event.detail)
  }

  const buttonHandler = async () => {
    if (detail?.input && detail?.input.length === 10) {
      setNumberIsCorrect(true)

      let order: IOrder[] = []

      cartItems.forEach((cartItem) => {
        const newItem = {
          id: cartItem.product.id,
          quantity: cartItem.quantity,
        }

        order.push(newItem)
      })

      const body = { phone: `7${detail.input}`, cart: order }

      const response = await sentOrder(body)

      if (response?.statusText === 'OK') {
        chageShow(true)

        setTimeout(() => chageShow(false), 5000)
      }

      console.log(response)
    } else {
      setNumberIsCorrect(false)
    }
  }

  return (
    <>
      <InputMask
        mask='+7 (___) ___-__-__'
        replacement='_'
        // modify={modify}
        onMask={handleMask}
        placeholder='+7 (___) ___-__-__'
        className={`sm:w-full mt-10 outline-none bg-[#222222] py-2 px-4 rounded-xl text-[#F0F0F0] text-2xl ${
          numberIsCorrect ? '' : 'border-2 border-rose-500'
        }`}
      />
      <button
        onClick={buttonHandler}
        className='sm:ml-0 ml-5 bg-[#222222] py-2 px-8 rounded-xl text-[#F0F0F0] text-2xl'
      >
        Заказать
      </button>
    </>
  )
}

export default CustomInputMask
