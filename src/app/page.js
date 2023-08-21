import Image from 'next/image'
import Link from 'next/link'
import SellCard from "./components/SellCard/SellCard"
// import Pagenavigation from "./components/Pagenavigation/Pagenavigation"
import "./globals.css"
async function getProducts() {
  let res = await fetch("http://localhost:3000/api/products")
  return res.json()
}
export default async function Home() {
  let products = await getProducts()
  // console.log(typeof (products));
  const currentPosts = products.slice(0, 4)
  return (
    <div>


      {currentPosts.map((product => (
        <SellCard key={product.id} price={product.price} productName={product.name} description={product.description} ratings={Math.floor(Math.random() * 5)} />
      )))}
      {/* <Pagenavigation one="0" two="1" three="2" /> */}
    </div>
  )
}
