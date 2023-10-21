import React from "react";
import { Button } from "../Button";
import { HeroCar } from "../images/HeroCar";
import lamborghiniAventador from "../images/lamborghini_aventador.jpg";

export const HomePage = () => {
    return (
        <div className="backgroundImage">
            {/* <img src={lamborghiniAventador} alt="lamborghini_aventador"/> */}
            <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1>
            <Button />
        </div>
    );
};

// Якщо ви хочете використовувати компонент HeroCar
// export const HeroCar = () => {
//     return (
//         <img src={lamborghiniAventador} alt="lamborghini_aventador"/>
//     );
// };

// style={{ backgroundImage: `url(${lamborghiniAventador})`, width: "100%", height: "100%"}}

// import React from "react";
// import { Button } from "../Button";
// import { HeroCar } from "../images/HeroCar";

// export const HomePage = () => {
//     return (
//         <div style={{ backgroundImage: `url(${HeroCar()})` }}>
//             <img src="../images/lamborghini_aventador.jpg" alt="lamborghini_aventador"/>
//             <h1> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1>
//             <Button />
//         </div>
//     );
// };