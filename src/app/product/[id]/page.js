// "use client"
import './product.css'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import img from '../../../assets/img.png'
export default function page(params) {
    console.log(params.params.id);
    return (
        <div className='product-container m-auto w-5/6  rounded-lg  mt-24 pb-8 flex items-center'>
            <div className='product  flex  items-center'>
                <div className='part1 mt-6 '>
                    <div className='product-big-image rounded-lg flex justify-center'>
                        <Image
                            alt='product image'
                            src={img} />
                    </div>
                    <div className='image-nav flex justify-evenly'>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                        <div className='shape rounded-lg mt-4'>
                            <Image
                                alt='product image'
                                src={img} />
                        </div>
                    </div>
                </div>
                <div className='part2 pl-6'>
                    <h1 className='title text-3xl font-extrabold '>Msi Monitor 240Hz</h1>
                    <div className='reviews flex h-8  items-center'>
                        <Rating
                            name="simple-controlled"
                            value={3}

                        />
                        <p className='ml-4 font-light'>3 reviews</p>
                    </div>
                    <div className='price_and_shipping flex items-center'>
                        <h1 className='text-3xl font-bold'>299$</h1>
                        <h1 className='text-l font-light ml-2'>+Free Shipping</h1>

                    </div>
                    <div className='details'>
                        <p className='description text-sm font-light mt-2'>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quisquam assumenda consectetur
                            alias, fugiat aliquam perferendis voluptate id debitis
                            tenetur distinctio incidunt doloribus, placeat eos optio,
                            maxime earum minus quis mollitia. Provident adipisci quod,
                            est ducimus perferendis impedit amet quos autem explicabo
                            quas quis nam suscipit ut obcaecati nobis sequi fugit?
                        </p>
                        <div className='button mt-3'>
                            <button className='px-4 py-2 primarybg text-white rounded-2xl text-md'>Add To Cart</button>
                        </div>
                        <div className='stock flex mt-4 items-center'>

                            <p className='text-xl'>Stock : </p>
                            <p className='fbold text-md text-green-400 ml-4'>in Stock</p>
                        </div>

                        <div className='category flex mt-2 items-center'>

                            <p className='text-xl'>Category : </p>
                            <p className='fbold text-md ml-4'>Electronics</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
