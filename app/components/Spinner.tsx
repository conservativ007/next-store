import React from 'react'
import Image from 'next/image'

const Spinner = () => {
  return (
    <Image
      src='./spinner.svg'
      alt='spinner'
      width={56}
      height={56}
      className='object-contain m-auto my-10'
    />
  )
}

export default Spinner
