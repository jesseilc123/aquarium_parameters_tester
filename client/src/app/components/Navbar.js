"use client"; // This is a client component

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggle from './ThemeToggle';

export default function Navbar( { darkMode, setDarkMode }) {
    return (
        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <AppBar component="nav" className="dark:bg-grey">
                <Toolbar >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: {xs: 16, sm: 20 }, flexGrow: 1, fontWeight: 550}}
                    >
                        Aquarium Parameter Checker
                    </Typography>
                    <Box className="flex flex-row items-center">
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}