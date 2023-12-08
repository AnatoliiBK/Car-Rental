import React from "react";

export const Button = ({text, isDarkTheme}) => {
    const buttonClasses = `button ${isDarkTheme ? 'buttonDark' : 'buttonLight'}`;
    return (
        <button className={buttonClasses}>{text}</button>
    )
}