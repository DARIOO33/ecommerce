import "./css.css"
export default function ItemAdded() {
    return (
        <div className="fixed text-xl z-99 mt-16 right-6  bottom-12 bg-green-500 text-white rounded-sm">
            <div className="px-6 py-2 ">

                Item Added To Your Basket
            </div>
            <div className="loading h-1  bg-blue-600"></div>
        </div>
    )
};
