"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './n.css'
export default function Navigation(params) {
    const pathname = usePathname()
    function prevpage() {
        if (pathname.length == 1) {
            return 1
        }
        const path = pathname.slice(1);
        const slash = path.indexOf('/')
        // console.log(slash);
        const pageIndex = path.substr(slash + 1, path.length - slash)
        // console.log(pageIndex);
        let prev = Number(pageIndex) - 1
        if (prev < 1) {
            prev = 1
        }
        return prev.toString()
    }
    function nextage() {
        console.log(pathname);
        if (pathname.length == 1) {
            return 2
        }

        const path = pathname.slice(1);
        const slash = path.indexOf('/')
        // console.log(slash);
        const pageIndex = path.substr(slash + 1, path.length - slash)
        // console.log(pageIndex);
        const prev = Number(pageIndex) + 1
        return prev.toString()
    }
    let prevv, nextt;
    if (pathname.includes("page")) {
        prevv = prevpage()
        nextt = nextage()
    }
    else {
        prevv = "page/" + prevpage()
        nextt = "page/" + nextage()


    }
    const prevlink = prevv
    const nextlink = nextt
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
