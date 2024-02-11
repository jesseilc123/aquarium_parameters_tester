"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import React, { useState, useMemo, useEffect, createContext } from 'react';

export const UserContext = createContext({});

export function Providers( { children }){
    const [darkMode, setDarkMode] = useState(false)
    const [user, setUser] = useState(null)
    const [tanks, setTanks] = useState(null)
    const [currentTank, setCurrentTank] = useState(null)

    function renderGraphDelete(params, id) {
        let updatedTank = currentTank
        let updatedParams = updatedTank[params].filter(param => {
            if (param.id !== id) {
                return param
            }
        })
        updatedTank[params] = updatedParams
        setCurrentTank(updatedTank)
    }

    function renderGraphNew(data, param) {  
        let updatedTank = currentTank
        const updatedParams = [data, ...currentTank[param]]
        updatedTank[param] = updatedParams
        setCurrentTank(updatedTank)
    }

    let mode = "light"
    
    if (typeof localStorage !== "undefined") {
        mode = localStorage.getItem("theme")
    };

    useEffect(() => {
        if (mode === "dark") {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [setDarkMode]);

    useEffect(() => {
        fetch("http://localhost:5555/check_session").then((r) => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                });
            }
        });
    }, [setUser]);

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
            <UserContext.Provider
                value={{ user, setUser, tanks, setTanks, currentTank, setCurrentTank, renderGraphDelete, renderGraphNew }}
            >
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                    {children}
            </UserContext.Provider>
        </ThemeProvider>
    );
};