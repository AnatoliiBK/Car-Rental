import React from "react";

export const HeroTitle = ({title, isDarkTheme}) => {
    const heroTitleClasses = `heroTitle ${isDarkTheme ? 'heroTitleDark' : 'heroTitleLight'}`;
    return (
        <h1 className={heroTitleClasses}>{title}</h1>
    )
}