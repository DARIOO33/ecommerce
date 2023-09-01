import Item from './Item.jsx'

export default function Categories() {
    const categories = [{ "id_cat": "1", "name": "electronics" }, { "id_cat": "2", "name": "sport" }, { "id_cat": "3", "name": "decor" }, { "id_cat": "4", "name": "fashion" }]

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
