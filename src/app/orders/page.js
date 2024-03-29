"use client"
import { useContext, useEffect } from "react"
import CartContext from "@/context/CartContext"
import Image from "next/image"
import "./orders.css"
import Price from "../components/order/Price"
import Total from "../components/order/Total"
import Nelements from "../components/order/Nelements"
import ElementsN from "../components/order/ElementsN"
import ItemList from "../components/order/ItemList"
import TotalN from "../components/order/TotalN"
import TotalWithTax from "../components/order/TotalWithTax"
import Stepbackk from "../components/order/Stepbackk"
export default function page() {


    return (
        <>
            <div className="order-container  w-full  laptop:flex mobile:block laptop:mt-0 mobile:mt-24 ">
                <div className="ordered-items laptop:w-8/12 mobile:w-full px-12 pt-10">
                    <div className="titles flex justify-between">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <Nelements />
                    </div>
                    <div className="mt-6 line w-full bg-slate-400 h-0.5 opacity-50 "></div>


                    <ItemList />

                </div>
                <div className="item-price laptop:w-4/12 mobile:w-full bg-slate-100 pt-10 px-12 " >
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>

                    <div className="mt-6 line w-full bg-slate-500 h-0.5 opacity-50 "></div>
                    <div className="price-details mt-6 flex w-full justify-between">

                        <ElementsN />
                        <TotalN />
                    </div>
                    <label htmlFor="shipping">

                        <h1 className="text-lg py-4 text-gray-500 font-bold">Shipping</h1>
                    </label>

                    <select className="text-xm px-3 py-2 pr-12 border-none" id="shipping">
                        <option className="text-lg py-4 text-gray-500 font-bold" defaultValue >


                            Standard Delivery - 5.00$

                        </option>
                    </select>
                    <label htmlFor="code">
                        <h1 className="text-lg py-4 text-gray-500 font-bold">Promo Code</h1>
                    </label>

                    <p className="pb-4">
                        <input type="text" id="code" placeholder="Enter Your Code" className="text-xm px-6 py-2 pr-12" />
                    </p>

                    <div className="py-4">
                        <button className="bg-red-500 hover:bg-red-800 active:opacity-80 py-2 px-8 text-xm text-white">Apply</button>
                    </div>
                    <div className="mt-4 line w-full bg-slate-500 h-0.5 opacity-50 "></div>
                    <div className="price-details mt-6 flex w-full justify-between">

                        <h1 className="text-lg text-center text-gray-500 font-bold">Total Cost</h1>

                        <TotalWithTax tax={5} />
                    </div>

                    <div className="py-8 text-center pb-16">
                        <button className="bg-purple-600 hover:bg-purple-900 active:opacity-80 py-2 px-8 w-64 text-lg text-white ">Check Out</button>
                    </div>

                </div>
            </div>
            <Stepbackk />
        </>

    )
};
