import React from "react";
import { Button } from "../Button";
import { Section } from "../sections/Section";
import { HeroTitle } from "../HeroTitle";
import { NavLink } from "react-router-dom";

const HomePage = ({ isDarkTheme }) => {
    // const homePageClasses = isDarkTheme ? "homePageDark" : "homePage";
    const homePageClasses = `${isDarkTheme ? "homePageDark" : "homePage"}`;
    return (
        <div className={homePageClasses}>
            <Section>
                <HeroTitle title='Do you want an incredible experience? Choose a car for yourself! Every single one of them is great!' isDarkTheme={isDarkTheme} />
                
                <NavLink to='/catalog'>
                    <Button text='All Cars' isDarkTheme={isDarkTheme} />
                </NavLink>
                <NavLink to='/sporting'>
                    <Button text='Sporting Cars' isDarkTheme={isDarkTheme} />
                </NavLink>
                <NavLink to='/suv'>
                    <Button text='SUV Cars' isDarkTheme={isDarkTheme} />
                </NavLink>
                <NavLink to='/all road'>
                    <Button text='All Road Cars' isDarkTheme={isDarkTheme} />
                </NavLink>
                <NavLink to='/favorites'>
                    <Button text='Favorites Cars' isDarkTheme={isDarkTheme} />
                </NavLink>
            </Section>
        </div>
        
    );
};

export default HomePage;