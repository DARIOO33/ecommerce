"use client"
import { useRouter } from 'next/navigation'

import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function StepBack(params) {
    const router = useRouter()
    return (
        <p onClick={() => router.back()}>
            <AiOutlineArrowLeft className='text-3xl' />
        </p>
    )
};
