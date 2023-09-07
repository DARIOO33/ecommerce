"use client"
import { useContext } from "react";
import CartContext from "@/context/CartContext";
export default function TotalN({ tax }) {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext)
    let orders = []
    try {
        if (cart.cartItems) {
            orders = (cart.cartItems)

        }

    }
    catch {
        orders = []
    }
    let price = 0;
    orders.forEach(order => {
        price = price + Number(order.price * order.quantity)

    });
    return (
        <h1 className="text-lg text-center text-gray-500 font-bold">{(price + tax).toFixed(2)} $</h1>
    )
};
