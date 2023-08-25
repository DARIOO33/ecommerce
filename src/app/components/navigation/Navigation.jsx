"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './n.css'
import { document } from 'postcss'
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
    const pageKeyword = "/page/";
    prevv = pageKeyword + prevpage()
    nextt = pageKeyword + nextpage()


    const nextlink = nextt
    const prevlink = prevv
    const prev = "<<"
    const next = ">>"
    let first, second, third, activef, actives;
    console.log(pageIndex);
    if (pageIndex == 1 || pageIndex == "") {
        first = pageIndex

        second = Number(pageIndex) + 1
        third = Number(pageIndex) + 2
        activef = true
        actives = false
        if (pageIndex == "") {
            activef = true
            actives = false
            first = 1
            second = 2
            third = 3
        }
    }

    else {
        first = Number(pageIndex) - 1
        second = Number(pageIndex)
        third = Number(pageIndex) + 1
        actives = true
    }
    let isActive, isActivef;
    if (activef) {
        isActive = 'active '
        isActivef = " "
    }
    else {
        isActive = ""
        isActivef = "active "
    }

    return (
        <div className="m-auto justify-between  text-center mt-12 flex items-center w-64 h-12 ">
            <Link href={prevlink}>
                <div className="itemm px-2 prev" >
                    {prev}
                </div>
            </Link>
            <Link href={prevlink}>
                <div className={isActive + ("itemm px-2 current")}>
                    {first}
                </div>
            </Link>
            <Link href={'/page/' + second.toString()}>
                <div className={isActivef + "itemm px-2 next"}>{second}</div>
            </Link>
            <Link href={nextlink}>
                <div className="itemm px-2">
                    {third}
                </div>
            </Link>
            <Link href={nextlink}>
                <div className="itemm px-2 next">

                    {next}
                </div>
            </Link>
        </div>
    )
};
