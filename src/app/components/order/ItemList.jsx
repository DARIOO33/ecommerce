import Image from "next/image"
import CartContext from "@/context/CartContext"
import Price from "./Price"
import Total from "./Total"
import { useContext } from "react"
import { useState } from "react"

export default function ItemList() {
    // const [counter, setCounter] = useState(1)

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

    console.log(orders);
    const Increament = (cartItem) => {
        const newQty = cartItem.quantity + 1
        const item = { ...cartItem, quantity: newQty }
        addItemToCart(item)
    }
    const Decreament = (cartItem) => {
        if (cartItem.quantity == 1) return
        const newQty = cartItem.quantity - 1
        const item = { ...cartItem, quantity: newQty }
        addItemToCart(item)
    }

    return (

        <>
            {orders.map((order => (
                <div className="itemlist mt-6 laptop:flex mobile:block" key={order.product_id}>
                    <div className="product-details laptop:w-5/12 mobile:w-full ">
                        <div className="laptop:flex mobile:block mt-6 ">
                            <div className="p-image laptop:w-2/4 mobile:w-full mobile:m-auto mobile:text-center laptop:m-0">
                                <Image
                                    alt="Msi Monitor"
                                    height={700}
                                    width={700}
                                    src={order.image.img} />
                            </div>
                            <div className="p-details laptop:w-2/4 mobile:w-full justify-evenly  px-5 flex mt-1.5 mobile:text-center laptop:text-left ">
                                <h1 className="font-semibold text-sm">{order.name}</h1>
                                <h1 className="text-gray-600 font-normal text-sm">{order.category}</h1>
                                <h1 className="text-red-500 cursor-pointer font-normal text-sm" onClick={() => deleteItemFromCart(order.product_id)}>Remove</h1>
                            </div>
                        </div>
                    </div>
                    <div className="quantity laptop:w-3/12 mobile:w-full text-center">

                        <div className="flex w-1/2 h-4/5 m-auto justify-evenly items-center">
                            <p className="font-bold cursor-pointer text-xl " onClick={() => Decreament(order)} >-</p>
                            <p className=" outline-3 px-3 py-1 outline outline-slate-200 ">{order.quantity}</p>
                            <p className="font-bold cursor-pointer text-xl" onClick={() => Increament(order)}>+</p>
                        </div>
                    </div>
                    <div className="price laptop:w-2/12 mobile:w-full mobile:py-4 laptop:py-0 laptop:text-left ">

                        <Price value={order.price} />
                    </div>
                    <div className="total laptop:w-2/12 mobile:w-full mobile:py-4">

                        <Total total={(order.price * order.quantity).toFixed(2)} />
                    </div>
                </div >
            )))
            }
        </>

    )
};
