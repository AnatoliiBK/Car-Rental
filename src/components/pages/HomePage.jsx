import React from "react";
import { Button } from "../Button";
import { Section } from "../sections/Section";
import { HeroTitle } from "../HeroTitle";
export const HomePage = () => {
    return (
        <div className="homePage">
            <Section>
                <HeroTitle title='Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!' />
                {/* <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1> */}
                <Button text='All Cars' />
                <Button text='Sporting Cars' />
                <Button text='SUV Cars' />
                <Button text='All Road Cars' />
            </Section>
        </div>
        
    );
};