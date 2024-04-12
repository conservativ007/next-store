import Image from 'next/image'
import Header from './components/Header'
import Review from './components/Review'
import Cart from './components/ProductsList'
import { ShoppingCart } from './components/ShoppingCart'

export default function Home() {
  return (
    <main>
      <Header />
      <Review />
      <ShoppingCart />
    </main>
  )
}
