"use client"
import { useContext } from 'react'
import CartContext from '@/context/CartContext';
export default function ElementsN() {
    const { addItemToCart, cart } = useContext(CartContext)
    let orders;


    try {
        orders = cart.cartItems.length
        // console.log(cart.cartItems.length);
    }
    catch {
        orders = 0
    }
    return (
        <h1 className="text-lg text-center text-gray-500 font-bold">Items : {orders}</h1>
    )

};
