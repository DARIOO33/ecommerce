import "../[id]/product.css"
export default function Stock(params) {
    return (
        <div className='stock flex mt-4 items-center'>

            <p className='text-xl'>Stock : </p>
            <p className='fbold text-md text-green-400 ml-4'>in Stock</p>
        </div>
    )
};
