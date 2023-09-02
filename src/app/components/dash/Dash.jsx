"use client"
import { AiFillFunnelPlot } from "react-icons/ai";
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
            <div className=' flex justify-center items-center h-14 filtre mt-36 cursor-pointer laptop:hidden ' onClick={handleclick}><AiFillFunnelPlot /> <span>Filtre</span> </div>

            <div className={activedash ? "activedash dash w-1/3" : "dash w-1/3"}>
                <div className="dashboard rounded-xl ">
                    <p onClick={handleclick} className="close font-sans text-4xl float-right relative bottom-8 mr-4 cursor-pointer text-white">X</p>
                    <br />

                    <h1 className='text-2xl pt-4 text-center font-bold'>Price</h1>
                    <PriceParams />
                    <Categories />
                </div>
            </div>
        </ >
    )
};
