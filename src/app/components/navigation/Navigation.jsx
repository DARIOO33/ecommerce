"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import './n.css'
export default function Navigation() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentPage = searchParams.get('page') ?? 1
    console.log(currentPage);
    const nextPage = Number(currentPage) + 1
    const prevPage = Number(currentPage) - 1
    const hasPrevPage = prevPage > 0
    const hasNextPage = nextPage < 3



    const prev = "<<"
    const next = ">>"


    return (
        <div className="m-auto justify-between  text-center mt-12 flex items-center w-32 h-12 ">

            <button className="itemm cursor-pointer  prev" onClick={() => router.push('?page=' + prevPage)}
                disabled={!hasPrevPage}>
                {prev}
            </button>



            <button className="itemm cursor-pointer " onClick={() => router.push('?page=' + nextPage)}
                disabled={!hasNextPage}>


                {next}
            </button>

        </div>
    )
};
