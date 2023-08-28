import Image from "next/image"
export default function ImageNav({ src }) {
    return (
        <div className='shape rounded-sm mt-4'>
            <Image
                height={200}
                width={200}
                alt='product image'
                src={src} />
        </div>
    )
};
