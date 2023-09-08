import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/navigation/Navigation.jsx'
import Dash from './components/dash/Dash.jsx'
import img from '../assets/img.png'

import Sellcard from './components/Sellcard/Sellcard.jsx'
import "./globals.css"
async function getProducts() {
  let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 30 } })
  return res.json()
}
export default async function Home(params) {
  console.log(params.searchParams.page);
  let products = await getProducts()
  const PostsPerPage = 3
  const currentPage = params.searchParams.page ?? 1
  const currentPosts = products.slice((currentPage - 1) * PostsPerPage, currentPage * PostsPerPage)

  return (
    <div>
      <Dash />
      <div className=' z-10 content   pb-8'>


        {currentPosts.map((product => (

          <Sellcard img={product.images[0]} id={product.id} key={product.id} category={product.category} productName={product.name} description={product.description} price={product.price} />
        )))}

        <Navigation />
      </div>

    </div>
  )
}
