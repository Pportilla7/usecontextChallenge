import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext.jsx';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default Button;
