'use client'
import React from 'react'
import { usePopUpStore } from '../store/popUpStore'

const PopUp = () => {
  const { show } = usePopUpStore((state) => state)

  if (show) {
    return (
      <div className='absolute m-auto left-0 right-0 top-40 w-80 h-40 bg-[#777777] text-white text-3xl rounded-xl flex items-center text-center'>
        Запрос успешно отправлен
      </div>
    )
  }

  return null
}

export default PopUp
