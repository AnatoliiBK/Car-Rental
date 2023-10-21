import React from "react";
import { Button } from "../Button";

export const Section = () => {
    return (
        <section className="section">
            <div className="backgroundImage">
            {/* <img src={lamborghiniAventador} alt="lamborghini_aventador"/> */}
            <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1>
            <Button autoFocus/>
        </div>
        </section>
    );
};