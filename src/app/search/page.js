import Dash from './../components/dash/Dash.jsx'

import Sellcard from './../components/Sellcard/Sellcard.jsx'
import "../globals.css"
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 30 } })
    return res.json()
}
export default async function Home(params) {
    const keyword = params.searchParams.keyword
    let products = await getProducts()
    let FiltredProducts = products.filter((p => p.name.toLowerCase().includes(keyword.toLowerCase()) || p.description.toLowerCase().includes(keyword.toLowerCase())))

    return (
        <div>
            <Dash />
            <div className=' z-10 content   pb-8'>


                {FiltredProducts.map((product => (

                    <Sellcard img={product.images[0]} id={product.id} key={product.id} category={product.category} productName={product.name} description={product.description} price={product.price} />
                )))}

                {/* <Navigation /> */}
            </div>

        </div>
    )
}
