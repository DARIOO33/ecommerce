"use client"
import './Header.css'
import Bag from './Bag'
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
export default function Header() {

    return (
        <div >
            <header className="mobile:block  border-b mobile:fixed laptop:fixed w-full laptop:items-center top-0 laptop:flex  py-4     bg-white">
                <div className="item item1 ">
                    <h1 className=" mobile:text-center mobile:ml-0 title text-3xl laptop:ml-14 cursor-pointer ">
                        <Link href="/">

                            E-Commerce
                        </Link>
                    </h1>
                </div>
                <div className="item item2 flex justify-center m-auto text-center mobile:mt-6 laptop:mt-0  ">
                    <div className="search flex justify-center">
                        <p>
                            <input type="text" placeholder='Search Your Item' className='h-8 py-5 pl-4 laptop:w-72 rounded-xl bg-gray-100' />
                        </p>
                        <div className='icon flex justify-center items-center rounded-lg h-10 w-10'><AiOutlineSearch /></div>
                        <Bag />
                    </div>
                </div>
                <div>

                    <h1 className='profile mr-4 cursor-pointer absolute right-4 top-4'>
                        <Image
                            alt='Profile Image'
                            src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1693389115/ecommerce/profile_fvstey.png"}
                            height={40}
                            width={40} />
                    </h1>
                </div>
            </header>
        </div>

    )
};
