import React from "react";
import { Button } from "../Button";
import { Section } from "../sections/Section";
import { HeroTitle } from "../HeroTitle";
import { NavLink } from "react-router-dom"; // імпортувати компонент Link

const HomePage = () => {
    return (
        <div className="homePage">
            <Section>
                <HeroTitle title='Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!' />
                {/* <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1> */}
                <NavLink to='/catalog'>
                    <Button text='All Cars' />
                </NavLink>
                <NavLink to='/sporting'>
                    <Button text='Sporting Cars' />
                </NavLink>
                <Button text='SUV Cars' />
                <Button text='All Road Cars' />
            </Section>
        </div>
        
    );
};

export default HomePage;