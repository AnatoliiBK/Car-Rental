import React, { useEffect } from 'react';
// import './ButtonTheme.css';

const ButtonTheme = ({ setIsDarkTheme, isDarkTheme }) => {
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('darkTheme'));
    if (savedTheme !== null) {
      setIsDarkTheme(savedTheme);
    }
  }, [setIsDarkTheme]);

  return (
    <button
      className={`button-theme ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
      onClick={toggleTheme}
    >
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ButtonTheme;



// import React from "react";

// export const ButtonTheme = ({text}) => {
//     return (
//         <button className="button-th">{text}</button>
//     )
// }