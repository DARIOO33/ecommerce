import './dashboard.css'
import PriceParams from './PriceParams.jsx'
import Categories from './Categories.jsx'
export default function Dash() {
    return (
        <>
            <div className="dash w-1/3">
                <div className="dashboard rounded-xl ">
                    <h1 className='text-2xl pt-4 text-center font-bold'>Price</h1>
                    <PriceParams />
                    <Categories />

                </div>
            </div>
        </>
    )
};
