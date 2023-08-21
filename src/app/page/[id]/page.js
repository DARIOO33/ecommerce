import SellCard from "../../components/SellCard/SellCard"
// import Pagenavigation from "../../components/Pagenavigation/Pagenavigation"
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products")
    return res.json()
}
export default async function page(params) {
    console.log(params.params.id);
    const currentpage = params.params.id
    let products = await getProducts()
    // console.log(typeof (products));
    const currentPosts = products.slice((currentpage - 1) * 4, currentpage * 4)
    return (
        <div>


            {currentPosts.map((product => (
                <SellCard key={product.id} price={product.price} productName={product.name} description={product.description} ratings={Math.floor(Math.random() * 5)} />
            )))}
            {/* <Pagenavigation one={Number(currentpage) - 1} two={currentpage} three={Number(currentpage) + 1} /> */}

        </div>
    )
}
