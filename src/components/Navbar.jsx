import React from "react";
import Resume from '../assets/Work/resume.pdf';
// import {BsMoonStarsFill} from 'react-icons/bs';
// import { useState } from "react";

const NavBar = () => {
    // const [darkMode, setDarkMode] = useState(false);
    return (
        // <div className={darkMode ? "dark" : ""}>
        <div className=" bg-black text-white min-h-full px-10 md:px-20 lg:px-40">
        <nav className=" py-4 flex justify-between">
            <h1 className="text-4xl font-signature">MA</h1>
            <ul className="text-lg flex items-center">
                {/* <li>
                <BsMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer" />
                </li> */}
                <li>
                <a className="bg-gradient-to-r from-lime-400 to-yellow-300 text-sky-800 px-4 py-2 rounded-md ml-8" href={Resume}>Resume</a>
                </li>
            </ul>
        </nav>
        </div>
        // </div>
    );
}

export default NavBar;