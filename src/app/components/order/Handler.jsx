"use client"
import Quantity from "./Quantity"
import Price from "./Price"
import Total from "./Total"
import { useState } from "react"
export default function Handler(params) {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className="quantity w-3/12 text-center">
                <h1 className="text-xm text-center text-gray-400 font-bold">Quantity</h1>
                <Quantity counter={counter} setCounter={setCounter} />
            </div>
            <div className="price w-2/12">
                <h1 className="text-xm text-center text-gray-400 font-bold">Price</h1>
                <Price value={39.99} />
            </div>
            <div className="total w-2/12">
                <h1 className="text-xm text-center text-gray-400 font-bold">Total</h1>
                <Total value={39.99 * counter} />
            </div></>
    )
};
