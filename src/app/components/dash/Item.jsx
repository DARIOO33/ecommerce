"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Item({ text }) {

    return (
        <li className='text-center font-extralight mt-1'>
            <Link className='font-medium' href={"/category/" + text.toLowerCase()} >{text}</Link>
        </li >
    )
};
