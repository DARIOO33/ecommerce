import './product.css'
import Stock from '../smallcomponents/Stock.jsx'
import Link from 'next/link'
import Category from '../smallcomponents/Category.jsx'
import ImageNav from '../smallcomponents/ImageNav.jsx'
import Image from 'next/image'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import StepBack from '../smallcomponents/StepBack.jsx'
import BuyButton from '../smallcomponents/BuyButton.jsx'
import msi from '../../../assets/msi.png'
import msi2 from '../../../assets/msi2.png'
import ProductImages from '../smallcomponents/ProductImages'
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 30 } })
    return res.json()
}
export default async function page(params) {
    let products = await getProducts()
    // console.log(params.params.id);
    const index = (params.params.id) - 1
    const currentProduct = products[index]

    const images = currentProduct.images

    return (
        <>
            <div className='return ml-4 cursor-pointer absolute w-5/6 m-auto'>
                <StepBack />
            </div>
            <div className=' product-container m-auto w-5/6  rounded-lg   pb-8 laptop:flex mobile:block items-center laptop:mt-12 mobile:mt-28 '>
                <div className='product  laptop:flex mobile:block  laptop:items-center'>
                    <ProductImages currentProduct={currentProduct} />
                    <div className='part2 pl-6'>
                        <h1 className='title text-3xl font-extrabold '>{currentProduct.name}</h1>
                        <div className='reviews flex laptop:h-8  items-center laptop:justify-start mobile:justify-center mobile:py-4'>
                            <Rating
                                name="simple-controlled"
                                value={3}

                            />
                            <p className='ml-4 font-light'>3 reviews</p>
                        </div>
                        <div className='price_and_shipping flex items-center laptop:justify-start mobile:justify-center'>
                            <h1 className='text-3xl font-bold'>{currentProduct.price}$</h1>
                            <h1 className='text-l font-light ml-2'>+Free Shipping</h1>

                        </div>
                        <div className='details'>
                            <p className='description text-sm font-light mt-3'>
                                {currentProduct.description}
                            </p>
                            <BuyButton
                                img={currentProduct.images[0]}
                                id={currentProduct.id}
                                price={currentProduct.price}
                                category={currentProduct.category}
                                productName={currentProduct.name}
                                description={currentProduct.description}
                            />
                            <Stock />
                            <Category category={currentProduct.category} />


                        </div>
                    </div>
                </div>

            </div>
        </>

    )
};
