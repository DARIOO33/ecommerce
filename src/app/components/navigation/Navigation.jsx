"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './n.css'
export default function Navigation(params) {
    const pathname = usePathname()
    const path = pathname.slice(1);
    const slash = path.indexOf('/')
    const pageIndex = path.substr(slash + 1, path.length - slash)

    function prevpage() {
        if (pathname.length == 1) {
            return 1
        }
        let prev = Number(pageIndex) - 1
        if (prev < 1) {
            prev = 1
        }
        return prev.toString()
    }
    function nextpage() {
        console.log(pathname);
        if (pathname.length == 1) {
            return 2
        }
        const prev = Number(pageIndex) + 1
        return prev.toString()
    }
    let prevv, nextt;
    const pageKeyword = "page/";
    if (pathname.includes("page")) {
        prevv = prevpage()
        nextt = nextpage()
    }
    else {
        prevv = pageKeyword + prevpage()
        nextt = pageKeyword + nextpage()
    }
    const nextlink = nextt
    const prevlink = prevv
    const prev = "<<"
    const next = ">>"
    let first, second, third;
    if (pageIndex == 1) {
        first = pageIndex
        second = Number(pageIndex) + 1
        third = Number(pageIndex) + 2
    }
    else {
        first = Number(pageIndex) - 1
        second = Number(pageIndex)
        third = Number(pageIndex) + 1
    }
    return (
        <div className="m-auto justify-between  text-center mt-12 flex items-center w-64 h-12 ">
            <Link href={prevlink}>
                <div className="itemm px-2 prev" >
                    {prev}
                </div>
            </Link>
            <div className="itemm px-2">
                <Link href={prevlink}>
                    {first}
                </Link>
            </div>
            <div className="itemm px-2">{second}</div>
            <div className="itemm px-2">
                <Link href={nextlink}>
                    {third}
                </Link>
            </div>
            <Link href={nextlink}>
                <div className="itemm px-2 next">

                    {next}
                </div>
            </Link>
        </div>
    )
};
