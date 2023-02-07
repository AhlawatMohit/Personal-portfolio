import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <h1 className="bg-black text-white text-center py-3 ">Mohit Ahlawat © {year}</h1>
    );
}

export default Footer;