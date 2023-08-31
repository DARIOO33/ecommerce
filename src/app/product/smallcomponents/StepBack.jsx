"use client"
import { useRouter } from 'next/navigation'

import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function StepBack(params) {
    const router = useRouter()
    return (
        <p className=' cursor-default'>
            <AiOutlineArrowLeft onClick={() => router.back()} className='text-3xl cursor-pointer' />
        </p>
    )
};
