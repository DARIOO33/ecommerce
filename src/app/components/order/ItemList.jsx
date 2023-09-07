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
                <div className="itemlist mt-6 flex" key={order.product_id}>
                    <div className="product-details w-5/12">
                        <div className="flex mt-6">
                            <div className="p-image w-2/4">
                                <Image
                                    alt="Msi Monitor"
                                    height={500}
                                    width={500}
                                    src={order.image.img} />
                            </div>
                            <div className="p-details w-2/4 justify-evenly  px-5 flex mt-1.5 ">
                                <h1 className="font-semibold text-sm">{order.name}</h1>
                                <h1 className="text-gray-600 font-normal text-sm">{order.category}</h1>
                                <h1 className="text-red-500 cursor-pointer font-normal text-sm" onClick={() => deleteItemFromCart(order.product_id)}>Remove</h1>
                            </div>
                        </div>
                    </div>
                    <div className="quantity w-3/12 text-center">

                        <div className="flex w-1/2 h-4/5 m-auto justify-evenly items-center">
                            <p className="font-bold cursor-pointer text-xl " onClick={() => Decreament(order)} >-</p>
                            <p className=" outline-3 px-3 py-1 outline outline-slate-200 ">{order.quantity}</p>
                            <p className="font-bold cursor-pointer text-xl" onClick={() => Increament(order)}>+</p>
                        </div>
                    </div>
                    <div className="price w-2/12">

                        <Price value={order.price} />
                    </div>
                    <div className="total w-2/12">

                        <Total total={(order.price * order.quantity).toFixed(2)} />
                    </div>
                </div >
            )))
            }
        </>

    )
};
