import React from 'react'
import { fetchApi } from '../api/fetchApi'
import { IReview } from '../interfaces'

const Review = async () => {
  const URL = 'http://o-complex.com:1337/reviews'

  const res = await fetchApi(URL)

  console.log(res && res)

  return (
    <div className='m-auto w-[1442px] flex justify-center gap-5'>
      {res &&
        res.map((item: any, index: number) => {
          return (
            <div className='mt-10 p-5 w-[468px] h-[611px] rounded-lg bg-[#D9D9D9] text-[#000000] flex flex-col justify-between'>
              <p key={index}>{item.text}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Review
