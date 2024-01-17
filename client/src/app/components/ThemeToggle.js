"use client";
import React from "react"
import { useEffect } from "react";
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = ({ darkMode, setDarkMode}) => {

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode]);

    const handleChange = () => {
        setDarkMode(!darkMode)
    };

    return (
        <div className="flex flex-row items-center">
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            <Switch
                checked={darkMode ? true : false}
                color="default"
                label="ThemeToggle"
                onChange={handleChange}
            />
        </div>
    );
};

export default ThemeToggle;