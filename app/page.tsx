import Image from 'next/image'
import Header from './components/Header'
import Review from './components/Review'

import { LoadMore } from './components/LoadMore'
import PopUp from './components/PopUp'
import Spinner from './components/Spinner'
import Cart from './components/Cart'

export default function Home() {
  return (
    <main className='relative'>
      <Header />
      <Review />
      <Cart />
      <LoadMore />
      <PopUp />
    </main>
  )
}
