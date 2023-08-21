import Image from 'next/image'
import Link from 'next/link'
import Sellcard from './components/Sellcard/Sellcard.jsx'
import "./globals.css"
async function getProducts() {
  let res = await fetch("https://dario4dev.netlify.app/api/products")
  return res.json()
}
export default async function Home() {
  let products = await getProducts()
  const currentPosts = products.slice(0, 4)
  let rate = Math.floor(Math.random() * 5)
  return (
    <div>


      {currentPosts.map((product => (
        <Sellcard key={product.id} ratings={rate} productName={product.name} description={product.description} price={product.price} />
      )))}

    </div>
  )
}
