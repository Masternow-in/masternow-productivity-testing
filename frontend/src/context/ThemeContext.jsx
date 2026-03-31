import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    const toggleTheme = () => {
        // Theme toggle disabled - permanently dark theme
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
