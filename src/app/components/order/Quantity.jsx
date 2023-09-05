"use client"

import { useState } from "react"


export default function Quantity() {
    const [counter, setCounter] = useState(0)
    function Increament() {
        setCounter(counter + 1)
    }
    function Deccreament(e) {

        setCounter(counter - 1)

    }
    return (
        <div className="flex w-1/2 h-4/5 m-auto justify-evenly items-center">
            <p className="font-bold cursor-pointer text-xl " onClick={Deccreament}>-</p>
            <p className=" outline-3 px-3 py-1 outline outline-slate-200 ">{counter}</p>
            <p className="font-bold cursor-pointer text-xl" onClick={Increament}>+</p>
        </div>
    )
};
