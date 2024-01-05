"use client"; // This is a client component
import React, { useState, useEffect } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import ThemeToggle from './ThemeToggle';
import Link from 'next/link'
import { Avatar } from "@mui/material";

export default function Navbar( { darkMode, setDarkMode }) {
    // const data = window.localStorage.getItem('NAVBAR_STATE')
    const [currentTab, setCurrentTab] = useState("Home")

    // useEffect(() => {
    //     if (data === "" && data === undefined){
    //         setCurrentTab("Home")
    //     }
    //     setCurrentTab(JSON.parse(data))
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('NAVBAR_STATE', JSON.stringify(currentTab));
    // }, [currentTab])

    return (
        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <AppBar 
                component="nav" 
                id="navbar" 
                className={`dark:bg-grey sm:fixed`}
            >
                <Toolbar className='flex w-full justify-between'>
                    <div className="flex flex-row gap-4 items-center justify-center mr-4 sm:mr-0 sm:w-[700px]">
                        <Avatar src="/apclogo.png"/>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 550 }}
                            className='hidden sm:flex w-full'
                        >
                            Aquarium Parameter Checker
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center gap-3 justify-between sm:justify-end w-full'>
                        <div className='flex flex-row items-center gap-2'>
                            <Link href="/">
                                <button
                                    value="Home"
                                    className={`dark:text-blue-400 hover:text-grey-300 ${currentTab === "Home" ? "text-grey-300 font-bold" : "" }`}
                                    onClick={(e) => setCurrentTab(e.target.value)}
                                >
                                    Home
                                </button>
                            </Link>
                            <Link href="/tests">
                                <button
                                    value="Tests"
                                    className={`dark:text-blue-400 hover:text-grey-300 ${currentTab === "Tests" ? "text-grey-300 font-bold" : "" }`}
                                    onClick={(e) => setCurrentTab(e.target.value)}
                                >
                                    Tests
                                </button>
                            </Link>
                            <Link href="/ranges">
                                <button 
                                    value="Ranges"
                                    className={`dark:text-blue-400 hover:text-grey-300 ${currentTab === "Ranges" ? "text-grey-300 font-bold" : "" }`}
                                    onClick={(e) => setCurrentTab(e.target.value)}
                                >
                                    Ranges
                                </button>
                            </Link>
                        </div>
                        {/* <Box className="flex flex-row items-center">
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Box> */}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}