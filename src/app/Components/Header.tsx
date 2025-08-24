const Header = () => {
    return <>
    <div className="flex justify-between left-0 top-0 text-black bg-white p-4" style={{ fontFamily: 'BodoniModa, serif' }}>
        <div>
            <h1 className="text-4xl font-black" >Mind Craft Wellness</h1>
            <span className="font-sans text-sm">THERAPY THAT HOLDS, HEALS AND GROW</span>
        </div>
        <div>
            <ul className="flex space-x-6 p-2 text-2xl">
                <li className="m-3">About</li>
                <li className="m-3">Specialities</li>
                <li className="m-3">Blog</li>
                <li className="m-3">Careers</li>
                <button className="bg-[#345041] rounded-md text-white font-medium p-3 cursor-pointer shadow-md ">Book Now</button>
            </ul>
        </div>      
    </div>
    </>
}

export default Header;