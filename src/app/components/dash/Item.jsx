"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Item({ text }) {
    const pathname = usePathname()
    console.log(pathname);
    let ch;
    if (pathname.includes('category')) {
        ch = text.toLowerCase()
    }
    else {
        ch = "category/" + text.toLowerCase()

    }
    console.log(ch);

    const link = ch
    return (
        <li className='text-center font-extralight mt-1'>
            <Link className='font-medium' href={link} >{text}</Link>
        </li>
    )
};
