"use client"
import Quantity from "./Quantity"
import Price from "./Price"
import Total from "./Total"
import { useState } from "react"
export default function Handler({ value }) {
    const [counter, setCounter] = useState(1)

    return (
        <>
            <div className="quantity w-3/12 text-center">

                <Quantity counter={counter} setCounter={setCounter} />
            </div>
            <div className="price w-2/12">

                <Price value={value} />
            </div>
            <div className="total w-2/12">

                <Total total={value * counter} />
            </div></>
    )
};
