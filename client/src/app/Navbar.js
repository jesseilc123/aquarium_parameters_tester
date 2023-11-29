"use client"; // This is a client component

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ThemeToggle from './ThemeToggle';


export default function Navbar() {
    return (
        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <AppBar component="nav" className="dark:bg-grey">
                <Toolbar >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        className="dark:text-white text-grey font-semibold"
                    >
                    Aquarium Water Parameter Checker
                    </Typography>
                    <Box className="flex flex-row items-center">
                        {/* <ThemeToggle /> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}