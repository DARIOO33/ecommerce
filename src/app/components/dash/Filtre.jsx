"use client"
export default function Filtre() {
    const handleclick = () => {
        console.log(document.querySelector('.dashboard').classList.add('active'));
    }
    return (
        <>
            <p onClick={handleclick}>Click Me!</p>
            <h1 className="absolute z-99 top-2 left-2 text-white">X</h1>
        </>
    )
};
