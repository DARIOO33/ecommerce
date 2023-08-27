import "../[id]/product.css"
export default function Category({ category }) {
    return (
        <div className='category flex mt-2 items-center'>

            <p className='text-xl'>category : </p>
            <p className='fbold text-md ml-4'>{category}</p>
        </div>
    )
};
