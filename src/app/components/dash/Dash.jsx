"use client"

import './dashboard.css'
import PriceParams from './PriceParams.jsx'
import Categories from './Categories.jsx'
import { useState } from 'react'
export default function Dash() {
    const [activedash, setActivedash] = useState(false)
    const handleclick = () => {
        if (activedash) {
            setActivedash(false)
        }
        else {
            setActivedash(true)
        }
    }

    return (
        <>
            <p className='filtre mt-36 cursor-pointer laptop:hidden' onClick={handleclick}>Click Me!</p>

            <div className={activedash ? "activedash dash w-1/3" : "dash w-1/3"}>
                <div className="dashboard rounded-xl ">
                    <h1 className='text-2xl pt-4 text-center font-bold'>Price</h1>
                    <PriceParams />
                    <Categories />

                </div>
            </div>
        </ >
    )
};
