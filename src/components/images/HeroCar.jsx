import React from "react";

export const HeroCar = () => {
    const backgroundImageUrl = "./lamborghini_aventador.jpg"; // замініть це на власний URL

    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    };

    return <div style={divStyle}></div>;
};


// import React from "react";

// export const HeroCar = () => {
//     return (
//         <img src="./lamborghini_aventador.jpg" alt="lamborghini_aventador"/>
//     );
// };