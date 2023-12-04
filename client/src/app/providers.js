"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import * as React from 'react';

export default function Providers( { children }){
    const [darkMode, setDarkMode] = React.useState(true)

    const theme = React.useMemo(
        () => createTheme({
            palette: {
                mode: darkMode ? 'dark' : 'light',
            },
        }),
        [darkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div>
                {children}
            </div>
        </ThemeProvider>
    )
}