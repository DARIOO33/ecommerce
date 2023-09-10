"use client"
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CartContext from "@/context/CartContext"
import Loading from '../../components/Loading/Loading';
import Header from '@/app/components/Header/Header';

export default function BuyButton({ img, id, price, category, productName, description }) {
    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 2000);
    }, [showLoading]);

    const { addItemToCart } = useContext(CartContext)
    const router = useRouter()
    const addToCartHandler = () => {
        addItemToCart({
            product_id: id,
            name: productName,
            description: description,
            price: price,
            category: category,
            image: { img }
        })
        setShowLoading(true)

        setTimeout(() => {

            router.push("/orders")
        }, 1000)

    }
    return (
        <div className='button laptop:mt-3 mobile:py-4 mobile:mt-2 '>
            <button className='px-4 py-2 primarybg text-white rounded-2xl text-md' onClick={() => addToCartHandler()}>Buy Now</button>
            {showLoading && Loading()}

        </div>
    )
};
