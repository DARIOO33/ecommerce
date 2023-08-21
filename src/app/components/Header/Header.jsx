"use client"
import './Header.css'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
export default function Header() {

    return (
        <div >
            <header className="fixed w-full items-center  top-0 flex  py-4   border-b  bg-white">
                <div className="item item1">
                    <h1 className="title text-3xl ml-14 cursor-pointer">
                        <Link href="/">

                            E-Commerce
                        </Link>
                    </h1>
                </div>
                <div className="item item2 ">
                    <div className="search flex">
                        <p>
                            <input type="text" placeholder='Search Your Item' className='h-8 py-5 pl-4 w-72 rounded-xl bg-gray-100' />
                        </p>
                        <div className='icon flex justify-center items-center rounded-lg h-10 w-10'><AiOutlineSearch /></div>
                        <div className=' icons flex justify-center items-center rounded-lg h-10 w-10'><BsBag /></div>
                    </div>
                </div>
                <div>

                    <h1 className='mr-4 cursor-pointer'>Profile</h1>
                </div>
            </header>
        </div>

    )
};
