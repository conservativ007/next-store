'use client'
import React from 'react'
import { usePopUpStore } from '../store/popUpStore'

const PopUp = () => {
  const { show } = usePopUpStore((state) => state)

  if (show) {
    return (
      <div className='fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-80 h-40 bg-[#777777] text-white text-3xl rounded-xl flex items-center text-center'>
        Запрос успешно отправлен
      </div>
    )
  }

  return null
}

export default PopUp
