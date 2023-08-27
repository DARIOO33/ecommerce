import './product.css'
import Stock from '../smallcomponents/Stock.jsx'
import Link from 'next/link'
import Category from '../smallcomponents/Category.jsx'
import Image from 'next/image'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import msi from '../../../assets/msi.png'
import msi2 from '../../../assets/msi2.png'
async function getProducts() {
    let res = await fetch("https://dario4dev.netlify.app/api/products", { next: { revalidate: 3600 } })
    return res.json()
}
export default async function page(params) {
    let products = await getProducts()
    // console.log(params.params.id);
    console.log(products[(params.params.id) - 1]);
    let productName = products[(params.params.id) - 1].name
    let price = products[(params.params.id) - 1].price
    let description = products[(params.params.id) - 1].description
    let category = products[(params.params.id) - 1].category
    // let mainImage = products[(params.params.id) - 1].images[0]
    console.log(productName);
    return (
        <>
            <div className='return ml-4 cursor-pointer absolute w-5/6 m-auto'>
                <Link href="//">
                    <AiOutlineArrowLeft className='text-3xl' />
                </Link>
            </div>
            <div className=' product-container m-auto w-5/6  rounded-lg mt-24  pb-8 flex items-center'>
                <div className='product  flex  items-center'>
                    <div className='part1 mt-6 '>
                        <div className='product-big-image rounded-lg flex justify-center'>

                            <Image
                                alt='product image'
                                src={msi} />
                        </div>
                        <div className='image-nav flex justify-evenly'>
                            <div className='shape rounded-lg mt-4'>
                                <Image
                                    alt='product image'
                                    src={msi} />
                            </div>
                            <div className='shape rounded-lg mt-4'>
                                <Image
                                    alt='product image'
                                    src={msi} />
                            </div>
                            <div className='shape rounded-lg mt-4'>
                                <Image
                                    alt='product image'
                                    src={msi} />
                            </div>
                        </div>
                    </div>
                    <div className='part2 pl-6'>
                        <h1 className='title text-3xl font-extrabold '>{productName}</h1>
                        <div className='reviews flex h-8  items-center'>
                            <Rating
                                name="simple-controlled"
                                value={3}

                            />
                            <p className='ml-4 font-light'>3 reviews</p>
                        </div>
                        <div className='price_and_shipping flex items-center'>
                            <h1 className='text-3xl font-bold'>{price}$</h1>
                            <h1 className='text-l font-light ml-2'>+Free Shipping</h1>

                        </div>
                        <div className='details'>
                            <p className='description text-sm font-light mt-2'>
                                {description}
                            </p>
                            <div className='button mt-3'>
                                <button className='px-4 py-2 primarybg text-white rounded-2xl text-md'>Add To Cart</button>
                            </div>
                            <Stock />
                            <Category category={category} />


                        </div>
                    </div>
                </div>

            </div>
        </>

    )
};
