"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './n.css'
export default function Navigation(params) {
    const pathname = usePathname()
    console.log(pathname);
    function prevpage() {
        const path = pathname.slice(1);
        const slash = path.indexOf('/')
        console.log(slash);
        const pageIndex = path.substr(slash + 1, path.length - slash)
        console.log(pageIndex);
        const prev = Number(pageIndex) - 1
        return prev.toString()
    }
    function nextage() {
        const path = pathname.slice(1);
        const slash = path.indexOf('/')
        console.log(slash);
        const pageIndex = path.substr(slash + 1, path.length - slash)
        console.log(pageIndex);
        const prev = Number(pageIndex) + 1
        return prev.toString()
    }
    const prevlink = prevpage()
    const nextlink = nextage()
    const prev = "<<"
    const next = ">>"
    return (
        <div className="m-auto justify-between  text-center mt-12 flex items-center w-64 h-12 ">
            <div className="itemm px-2 prev" >
                <Link href={prevlink}>
                    {prev}
                </Link>
            </div>
            <div className="itemm px-2">
                1
            </div>
            <div className="itemm px-2">2</div>
            <div className="itemm px-2">3</div>
            <div className="itemm px-2 next">
                <Link href={nextlink}>

                    {next}
                </Link>
            </div>
        </div>
    )
};
