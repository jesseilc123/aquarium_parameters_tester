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
import { usePathname } from 'next/navigation'

export default function Navbar( { darkMode, setDarkMode }) {
    const pathname = usePathname()

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
                                    className={`dark:text-blue-400 hover:text-grey-300 ${pathname === "/" ? "text-grey-300 font-bold" : "" }`}
                                >
                                    Home
                                </button>
                            </Link>
                            <Link href="/tests">
                                <button
                                    value="Tests"
                                    className={`dark:text-blue-400 hover:text-grey-300 ${pathname === "/tests" ? "text-grey-300 font-bold" : "" }`}
                                >
                                    Tests
                                </button>
                            </Link>
                            <Link href="/ranges">
                                <button 
                                    value="Ranges"
                                    className={`dark:text-blue-400 hover:text-grey-300 ${pathname === "/ranges" ? "text-grey-300 font-bold" : "" }`}
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