import React from "react";
import { Button } from "../Button";
import { Section } from "../sections/Section";

export const HomePage = () => {
    return (
        <div className="homePage">
            <Section>
                <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1>
                <Button autoFocus/>
            </Section>
        </div>
        
    );
};