"use client"
import Image from "next/image"
import ImageNav from "./ImageNav"
import { useEffect, useRef, useState } from "react"
export default function ProductImages({ currentProduct }) {
    const imgRef = useRef(null)
    const setImgPreview = (url) => {
        imgRef.current.src = url
        console.log(url);
    }
    const images = currentProduct.images
    const [index, setIndex] = useState(0)
    return (
        <div className='part1 laptop:mt-6  mobile:mt-10'>
            <div className='product-big-image  rounded-lg laptop:flex laptop:justify-center mobile:flex mobile:m-auto'>

                <img
                    ref={imgRef}
                    alt='product image'
                    width={1000}
                    height={1000}
                    className='rounded-lg'
                    src={currentProduct.images[0]} />
            </div>
            <div className='image-nav flex justify-evenly'>

                {images.map((image => (
                    <div className='shape rounded-sm mt-4' key={image} onClick={() => setImgPreview(image)}>
                        <Image

                            height={200}
                            width={200}
                            alt='product image'
                            src={image} />
                    </div>
                )))}

            </div>
        </div>
    )
};
