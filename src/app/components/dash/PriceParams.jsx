"use client"
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import Link from "next/link"
import { useState, useEffect } from "react"
export default function PriceParams() {
    const [min, setMin] = useState(0)

    const [max, setMax] = useState(0)
    const [category, setCategory] = useState("null")
    const categories = ['electronics', "sport", "decor", "fashion"]
    const paths = usePathname()
    const searchParams = useSearchParams().get("category")

    useEffect(() => {
        if (paths.includes('category')) {

            const categorysearch = paths.substring(10, paths.length)
            setCategory(categorysearch)

            console.log(categorysearch);
        }
        try {

            categories.forEach(category => {
                let valid = (searchParams.includes(category))
                if (valid) {
                    setCategory(category)
                }

            });
        }
        catch {
            console.log("failed");
        }
    }, [paths]);


    const link = "/result?min=" + min + "&max=" + max + "&category=" + category

    let redirect;
    if (min > max) {
        redirect = "/error"
    }
    else {
        redirect = link
    }
    return (
        <div className="params">
            <p className='text-center'>
                <input onChange={(e) => setMin(e.target.value)} value={min} type="number" className='text-lg  text-center w-28 h-10  bg-gray-100 rounded-lg mt-4' placeholder='Min' />
            </p>
            <p className='text-center'>

                <input onChange={(e) => setMax(e.target.value)} value={max} type="number" className='text-lg  w-28 h-10 text-center   bg-gray-100 rounded-lg mt-4' placeholder='Max' />
            </p>

            <Link href={redirect}>
                <p className='text-center'>
                    <button className=' btnn px-5 py-2 text-xl rounded-lg mt-4 text-white' >Confirm</button></p>
            </Link>


        </div >
    )
};
