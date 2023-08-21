export default function PriceParams() {
    return (
        <div className="params">
            <p className='text-center'>
                <input type="number" className='text-lg  text-center w-28 h-10  bg-gray-100 rounded-lg mt-4' placeholder='Min' />
            </p>
            <p className='text-center'>

                <input type="number" className='text-lg  w-28 h-10 text-center   bg-gray-100 rounded-lg mt-4' placeholder='Max' />
            </p>
            <p className='text-center'><button className='btnn px-5 py-2 text-xl rounded-lg mt-4 text-white' >Confirm</button></p>
        </div>
    )
};
