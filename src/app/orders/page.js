import Image from "next/image"
import "./orders.css"
import Quantity from "../components/order/Quantity"
import Price from "../components/order/Price"
import Total from "../components/order/Total"
import Handler from "../components/order/Handler"
export default function page() {
    return (
        <div className="order-container  w-full   flex ">
            <div className="ordered-items w-8/12 px-12 pt-10">
                <div className="titles flex justify-between">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    <h1 className="text-2xl font-bold">N Items</h1>
                </div>
                <div className="mt-6 line w-full bg-slate-400 h-0.5 opacity-50 "></div>
                <div className="itemlist mt-6 flex">
                    <div className="product-details w-5/12">
                        <h1 className="text-xm text-gray-400 font-bold">Product Details</h1>
                        <div className="flex mt-6">
                            <div className="p-image w-2/4">
                                <Image
                                    alt="Msi Monitor"
                                    height={500}
                                    width={500}
                                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216055/ecommerce/msi_pe2l9f.png"} />
                            </div>
                            <div className="p-details w-2/4 justify-between  px-5 flex mt-1.5 ">
                                <h1 className="font-bold">Msi Monitor</h1>
                                <h1 className="font-bold">Electronics</h1>
                                <h1 className="text-red-500 cursor-pointer font-bold">Remove</h1>
                            </div>
                        </div>
                    </div>
                    <Handler />
                </div>
            </div>
            <div className="item-price w-4/12 bg-slate-100 pt-10 px-12" >
                <h1 className="text-2xl font-bold">Shopping Cart</h1>

                <div className="mt-6 line w-full bg-slate-500 h-0.5 opacity-50 "></div>
                <div className="price-details mt-6 flex w-full justify-between">

                    <h1 className="text-lg text-center text-gray-500 font-bold">Items N</h1>
                    <h1 className="text-lg text-center text-gray-500 font-bold">999 $</h1>
                </div>


            </div>

        </div>
    )
};
