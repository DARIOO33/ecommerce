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
export default function page() {



    return (
        <div className="order-container  w-full   flex ">
            <div className="ordered-items w-8/12 px-12 pt-10">
                <div className="titles flex justify-between">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    <Nelements />
                </div>
                <div className="mt-6 line w-full bg-slate-400 h-0.5 opacity-50 "></div>


                <ItemList />

            </div>
            <div className="item-price w-4/12 bg-slate-100 pt-10 px-12" >
                <h1 className="text-2xl font-bold">Shopping Cart</h1>

                <div className="mt-6 line w-full bg-slate-500 h-0.5 opacity-50 "></div>
                <div className="price-details mt-6 flex w-full justify-between">

                    <ElementsN />
                    <TotalN />
                </div>


            </div>

        </div>
    )
};
