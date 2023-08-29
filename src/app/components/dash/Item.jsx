"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Item({ text }) {
    const path = usePathname()
    // console.log(path);
    const category = path.substring(8, path.length)
    // console.log(category);

    return (
        <li className='text-center font-extralight mt-1'>
            <Link className='font-medium' href={"/category/" + text.toLowerCase()} >{text}</Link>
        </li >
    )
};
