import { BsBag } from 'react-icons/bs'

export default function Bag(params) {
    return (
        <div className='bag-container bg-red-100 text-center '>
            <p className='relative float-right right-2 bottom-2 bg-orange-400 px-1.5 text-sm rounded-full'>0</p>
            <div className=' icons flex justify-center items-center rounded-lg h-10 w-10'><BsBag /></div>
        </div>

    )
};
