"use client"
import { BsBag } from 'react-icons/bs'
import { useContext } from 'react'
import CartContext from '@/context/CartContext'
export default function Bag() {
    const { addItemToCart, cart } = useContext(CartContext)

    let orders;
    try {
        orders = cart.cartItems.length
    }
    catch {
        orders = 0
    }
    return (
        <div className='bag-container text-center '>
            <p className='relative float-right right-2 bottom-2 bg-orange-400 px-1.5 text-sm rounded-full'>{orders}</p>
            <div className=' icons flex justify-center items-center rounded-lg h-10 w-10'><BsBag /></div>
        </div>

    )
};
