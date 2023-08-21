import Item from './Item.jsx'
async function getCats() {
    let res = await fetch("https://dario4dev.netlify.app/api/categories")
    return res.json()
}
export default async function Categories() {
    const categories = await getCats()
    console.log(categories);
    return (
        <>
            <h1 className="text-center text-2xl font-bold mt-12">Category</h1>
            <ul className='mt-4'>
                {categories.map((category => (
                    <Item key={category.id_cat} text={category.name} />
                )))}



            </ul>
        </>
    )
};
