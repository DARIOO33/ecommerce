"use client"
import Rating from '@mui/material/Rating';
import { Suspense, useState } from 'react';
import { React } from 'react'
import Link from 'next/link';
import img from '../../../assets/img.png'
import Image from 'next/image'
import './Sellcard.css'
export default function SellCard({ img, id, price, productName, description, ratings }) {

    const [value, setValue] = useState(Math.floor(Math.random() * 5));
    const ratingChanged = (newRating) => {
        // console.log(newRating)
    }
    const href = id.toString()

    return (
        <>

            <Link href={"/product/" + href}>
                <div className="sellCard w-4/5 h-48 mt-8 rounded-xl m-auto flex items-center ">
                    <div className="product-image h-36 bg-gray-100 w-4/12 ml-6 rounded-lg">
                        <Image src={img} alt="" height={500} width={500} />
                    </div>
                    <div className="details w-5/12 pl-6">
                        <h1 className="text-xl font-bol cursor-pointer">{productName}</h1>
                        <p className="font-medium p-des">{(description.substr(0, 100))}...</p>
                        <div className="stars pt-2">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                    <div className="buy w-2/12  m-auto text-center">
                        <div className="text-center ">

                            <h1 className=' text-primary price-btn'>{price}$</h1>
                            <p className=' text-sm font-medium text-primary'>+Free Shipping</p>
                        </div>
                        <div className="btn text-center mt-4 ">

                            <button className='text-white btnn px-4 py-1 btn-buy rounded-xl  '>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </Link >

        </>
    )
};

