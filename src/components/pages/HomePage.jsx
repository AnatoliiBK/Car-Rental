import React from "react";
import { Button } from "../Button";
import { Section } from "../sections/Section";
import { HeroTitle } from "../HeroTitle";
import { NavLink } from "react-router-dom";

const HomePage = ({ isDarkTheme }) => {
    // const homePageClasses = isDarkTheme ? "homePageDark" : "homePage";
    const homePageClasses = `homePage ${isDarkTheme ? "homePageDark" : ""}`;
    return (
        <div className={homePageClasses}>
            <Section>
                <HeroTitle title='Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!' />
                {/* <h1 className="heroTitle"> Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!</h1> */}
                <NavLink to='/catalog'>
                    <Button text='All Cars' />
                </NavLink>
                <NavLink to='/sporting'>
                    <Button text='Sporting Cars' />
                </NavLink>
                <NavLink to='/suv'>
                    <Button text='SUV Cars' />
                </NavLink>
                <NavLink to='/all road'>
                    <Button text='All Road Cars' />
                </NavLink>
            </Section>
        </div>
        
    );
};

export default HomePage;