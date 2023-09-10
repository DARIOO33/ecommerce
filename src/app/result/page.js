import { Suspense } from "react";
import Dash from "../components/dash/Dash";
import Sellcard from "../components/Sellcard/Sellcard";
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 10 } })
    return res.json()
}
export default async function page(params) {
    console.log(params.searchParams.min);
    console.log(params.searchParams.max);
    const min = params.searchParams.min
    const max = params.searchParams.max
    const category = params.searchParams.category
    const products = await getProducts()
    let filtredPrice;
    if (category == "null") {
        filtredPrice = products.filter((product => ((Number(product.price) > min) && (Number(product.price) < max))))
    }
    else {
        filtredPrice = products.filter((product => (Number(product.price) > min && Number(product.price) < max) && product.category == category))

    }
    if (Number(max) + Number(min) == 0) {
        return (
            <div>

                <Dash />
                <div className='content  mt-8 pb-8 '>

                    <p className="text-3xl text-center font-bold pt-12 ">Enter a Min and Max Price Please !! </p>
                </div>

            </div>

        )
    }
    else {


        return (
            <div>
                <Dash />


                <div className='content   pb-8'>


                    {filtredPrice.map((product => (


                        <Sellcard img={product.images[0]} id={product.id} key={product.id} productName={product.name} description={product.description} price={product.price} />

                    )))}

                </div>

            </div>

        )
    }
};
