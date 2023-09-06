"use client"
import { useContext } from "react";
import CartContext from "@/context/CartContext";
export default function TotalN({ value }) {
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
    console.log(value);
    let price = 0;
    orders.forEach(order => {
        price = price + Number(order.price * order.quantity)

    });
    return (
        <h1 className="text-lg text-center text-gray-500 font-bold">{price.toFixed(2)} $</h1>
    )
};
