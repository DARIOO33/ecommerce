"use client"
import { useContext } from 'react'
import CartContext from '@/context/CartContext';
export default function Nelements(params) {
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
        <h1 className="text-2xl font-bold">{orders} Items</h1>

    )
};
