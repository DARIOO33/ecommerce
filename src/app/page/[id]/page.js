import Sellcard from "../../components/Sellcard/Sellcard"
import Navigation from "../../components/navigation/Navigation"
import Dash from '../../components/dash/Dash'
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 10 } })
    return res.json()
}
export default async function page(params) {
    console.log(params.params.id);
    const currentpage = params.params.id
    let products = await getProducts()
    // console.log(typeof (products));
    const currentPosts = products.slice((currentpage - 1) * 3, currentpage * 3)
    return (
        <div>

            <Dash />
            <div className='content w-2/3    pb-8'>


                {currentPosts.map((product => (
                    <Sellcard img={product.images[0]} id={product.id} key={product.id} price={product.price} category={product.category} productName={product.name} description={product.description} ratings={Math.floor(Math.random() * 5)} />
                )))}
                <Navigation />

            </div>
        </div>
    )
}
