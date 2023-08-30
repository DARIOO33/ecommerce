"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
export default function Item({ text }) {

    const path = usePathname()
    useEffect(() => {
        const category = path.substring(10, path.length)
        console.log(category);
        // console.log(path.substring(10, path.length) == text);


    }, [path])


    return (
        <li className='text-center font-extralight mt-1'>
            <Link className={path.substring(10, path.length) == text ? "text-blue-500" : "" + 'link font-medium'} href={"/category/" + text.toLowerCase()} >{text}</Link>
        </li >
    )
};
