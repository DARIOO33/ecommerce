"use client"
import Rating from '@mui/material/Rating';
import { Suspense, useState, useContext, useEffect } from 'react';
import { React } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Loading from '../Loading/Loading';
import Image from 'next/image'
import './Sellcard.css'
import ItemAdded from '../itemAdded/itemAdded';
import CartContext from "@/context/CartContext"
export default function SellCard({ img, id, price, category, productName, description, ratings }) {
    const router = useRouter()
    const [showComponent, setShowComponent] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 3000);
    }, [showLoading]);

    useEffect(() => {
        setTimeout(() => {
            setShowComponent(false);
        }, 3000);
    }, [showComponent]);


    const [value, setValue] = useState(Math.floor(Math.random() * 5));
    const href = id.toString()
    const { addItemToCart } = useContext(CartContext)

    const addToCartHandler = () => {

        addItemToCart({
            product_id: id,
            name: productName,
            description: description,
            price: price,
            category: category,
            image: { img }
        })
        setShowComponent(true);


    }
    function redirect() {
        setShowLoading(true)
        setTimeout(() => {
            router.push("/product/" + href)
        }, 500);
    }

    return (
        <div onClick={redirect}>

            <div className="sellCard   w-4/5  mobile:mt-12  laptop:mt-8 rounded-xl m-auto laptop:flex items-center  ">
                <div className="product-image   bg-gray-100 mobile:w-7/12 laptop:w-4/12  laptop:ml-6 mobile:text-center mobile:m-auto mobile:mt-2 rounded-lg">
                    <Image src={img} alt="" height={500} width={500} />
                </div>
                <div className="details laptop:w-5/12 mobile:w-10/12 mobile:text-center laptop:text-left  laptop:pl-6 mobile:pl-0 mobile:m-auto">

                    <Suspense fallback={<p>Loading ...</p>}>
                        <h1 className="text-xl font-bol cursor-pointer">{productName}</h1>
                    </Suspense>
                    <p className="font-medium p-des">{(description.substr(0, 100))}...</p>
                    <div className="stars pt-2">
                        <Rating
                            name="simple-controlled"
                            value={value}

                        />
                    </div>
                </div>
                <div className="buy laptop:w-2/12 mobile:w-8/12  m-auto text-center mobile:pb-4">
                    <div className="text-center ">

                        <h1 className=' text-primary price-btn'>{price}$</h1>
                        <p className=' text-sm font-medium text-primary'>+Free Shipping</p>
                    </div>
                    <div className="btn text-center mt-4 ">

                        <button onClick={addToCartHandler} className='text-white btnn px-4 py-1 btn-buy rounded-xl  '>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            {showComponent && ItemAdded()}
            {showLoading && Loading()}

        </div>

    )
};
