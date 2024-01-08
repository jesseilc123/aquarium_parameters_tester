"use client";
import React, { useState } from "react"
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
    }

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
    )
};

// "use client";

// import {useTheme} from "next-themes";
// import { useEffect, useState } from "react";
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Switch from '@mui/material/Switch';

// export function ThemeToggle() {
//     const [mounted, setMounted] = useState(false)
//     const { theme, setTheme } = useTheme()

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     if(!mounted) return null

//     function handleChange() {
//         if (theme === "light") {
//             setTheme("dark")
//         } else {
//             setTheme("light")
//         }
//     }
//     return (
//         <div className="flex flex-row items-center">
//             {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
//             <Switch
//                 defaultChecked color="default"
//                 label="ThemeToggle"
//                 onChange={handleChange}
//             />
//             <button onClick={() => setTheme("light")}>Light</button>
//             <button onClick={() => setTheme("dark")}>dark</button>
//         </div>
//     )
// };

export default ThemeToggle;