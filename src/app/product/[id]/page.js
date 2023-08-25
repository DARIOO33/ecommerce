"use client"
import './product.css'
import Image from 'next/image'
import img from '../../../assets/img.png'
export default function page(params) {
    console.log(params.params.id);
    return (
        <div className='product-container m-auto w-5/6  rounded-lg  mt-24 pb-8'>
            <div className='product py-4 flex  items-center'>
                <div className='part1 '>
                    <div className='product-big-image rounded-lg'>
                        <Image
                            alt='product image'
                            src={img} />
                    </div>
                    <div className='image-nav flex justify-evenly'>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                    </div>
                </div>
                <div className='part2 bg-black '>
                    e
                </div>
            </div>

        </div>
    )
};
