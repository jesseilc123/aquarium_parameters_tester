"use client"; // This is a client component

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link'

export default function Navbar( { darkMode, setDarkMode }) {
    return (
        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <AppBar 
                component="nav" 
                id="navbar" 
                className={`dark:bg-grey sm:fixed`}
            >
                <Toolbar className='flex w-full sm:justify-between'>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: {xs: 16, sm: 20 }, flexGrow: 1, fontWeight: 550}}
                        className='hidden sm:flex w-full'
                    >
                        Aquarium Parameter Checker
                    </Typography>
                    <div className='flex flex-row items-center gap-3 justify-between sm:justify-end w-full'>
                        <div className='flex flex-row items-center gap-2'>
                            <Link href="/">
                                <Typography className='dark:text-blue-400 hover:underline'>Home</Typography>
                            </Link>
                            <Link href="/ranges">
                                <Typography className='dark:text-blue-400 hover:underline'>Ranges</Typography>
                            </Link>
                        </div>
                        <Box className="flex flex-row items-center">
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}