import React from "react";
import logoUir from '../assets/uir-logo.png';

const CardHover = ({ clubName, description, imgSrc }) => {
    return (
        <div className="container">
            <div className="m-[50px] shadow-2xl relative group rounded-[20px]">
                <img
                    src={imgSrc}
                    alt="Logo Club"
                    className="lg:h-[400px] lg:w-[500px] rounded-[20px] z-[-1] transition-opacity duration-[0.5s] ease-in-out group-hover:opacity-70"
                />
                <div className="opacity-0 overflow-hidden group-hover:opacity-100 transition-opacity duration-[0.5s] ease-in-out h-[250px] lg:[400px] xlg:w-[500px] p-2 box-border absolute text-white transform -translate-y-full">
                    <div className="h-[240px] xlg:w-[500px] lg:w-[300] rounded-[20px] bg-gradient-to-t from-barberry-600 to-transparent bg-opacity-[0.4] m-[-8px]">
                        <h1 className="m-[10px] text-4xl font-bold">{clubName}</h1>
                        <p className="text-[20px] m-5">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHover;