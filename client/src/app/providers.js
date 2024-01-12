"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import React, { useState, useMemo, useEffect } from 'react';

export default function Providers( { children }){
    const [darkMode, setDarkMode] = useState(false)

    let mode = "light"
    
    if (typeof localStorage !== "undefined") {
        mode = localStorage.getItem("theme")
    }

    useEffect(() => {
        if (mode === "dark") {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [setDarkMode]);

    const theme = useMemo(
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
            <div className='mb-20'>
                {children}
            </div>
        </ThemeProvider>
    )
}