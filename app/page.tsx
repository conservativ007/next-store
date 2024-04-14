import Image from 'next/image'
import Header from './components/Header'
import Review from './components/Review'
import Cart from './components/ProductsList'
import { ShoppingCart } from './components/ShoppingCart'
import PopUp from './components/PopUp'
import Spinner from './components/Spinner'

export default function Home() {
  return (
    <main className='relative'>
      <Header />
      <Review />
      <ShoppingCart />
      <PopUp />
    </main>
  )
}
