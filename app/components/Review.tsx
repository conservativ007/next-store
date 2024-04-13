import React from 'react'
import { fetchReview } from '../api/fetchReview'

const Review = async () => {
  const res = await fetchReview()

  return (
    <div className='lg:flex-col lg:w-4/5 m-auto w-[1442px] flex justify-center items-center gap-5'>
      {res &&
        res.map((item: any, index: number) => {
          return (
            <div className='mt-10 p-5 w-[468px] rounded-lg bg-[#D9D9D9] text-[#000000] flex flex-col justify-between'>
              <p key={index}>{item.text}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Review
