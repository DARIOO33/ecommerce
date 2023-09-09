"use client"
import { useContext } from 'react';
import CartContext from "@/context/CartContext"

export default function BuyButton({ img, id, price, category, productName, description }) {
    const { addItemToCart } = useContext(CartContext)
    const addToCartHandler = () => {
        addItemToCart({
            product_id: id,
            name: productName,
            description: description,
            price: price,
            category: category,
            image: { img }
        })
    }
    return (
        <div className='button laptop:mt-3 mobile:py-4 mobile:mt-2 '>
            <button className='px-4 py-2 primarybg text-white rounded-2xl text-md' onClick={() => addToCartHandler()}>Buy Now</button>
        </div>
    )
};
