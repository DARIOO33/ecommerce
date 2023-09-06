import Image from "next/image"
import Handler from "./Handler"
import CartContext from "@/context/CartContext"
import { useContext } from "react"
export default function ItemList() {
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
                            <div className="p-details w-2/4 justify-between  px-5 flex mt-1.5 ">
                                <h1 className="font-bold">{order.name}</h1>
                                <h1 className="font-bold">Electronics</h1>
                                <h1 className="text-red-500 cursor-pointer font-bold" onClick={() => deleteItemFromCart(order.product_id)}>Remove</h1>
                            </div>
                        </div>
                    </div>
                    <Handler value={order.price} />
                </div >
            )))
            }
        </>

    )
};
