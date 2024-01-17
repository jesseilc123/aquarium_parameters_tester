"use client"; // This is a client component
import React, { useState } from "react"
import ThemeToggle from './ThemeToggle';
import Link from 'next/link'
import { Avatar, Typography, Toolbar, CssBaseline, Box, AppBar, useScrollTrigger, Slide, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import { navItems } from "../constants";

export default function Navbar( { darkMode, setDarkMode } ) {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false);
    
    let win = 0

    if (typeof window != "undefined"){
        win = window
    }

    const trigger = useScrollTrigger({
        target: (typeof window !== "undefined") ? window : undefined,
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box> 
            <CssBaseline />
            <Slide appear={false} direction="down" in={ win.innerWidth > 697 ? true : !trigger} sx={{display: {sm: "absolute"}}}>
                <AppBar 
                    component="nav" 
                    id="navbar" 
                    className={`dark:bg-grey sm:fixed`}
                >
                    <Toolbar className='flex w-full justify-between'>
                        <div className="flex flex-row gap-4 items-center md:justify-center mr-4 md:mr-0 sm:w-[700px]">
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Avatar src="/apclogo.png"/>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ fontWeight: 550 }}
                                className='hidden md:flex  md:w-[440px]'
                            >
                                Aquarium Parameter Checker
                            </Typography>
                        </div>
                        <div className='flex flex-row items-center gap-3 justify-between sm:justify-end w-full'>
                            <div className='md:flex flex-row items-center gap-2 hidden'>
                                {navItems.map((item) => (
                                    <Link key={item.link} href={item.link}>
                                        {item.link === "/" ? (
                                            <button
                                                value={item.name}
                                                className={`dark:text-blue-400 hover:text-grey-300 ${pathname === "/" ? "text-grey-300 font-bold" : "" }`}
                                            >
                                                {item.name}
                                            </button>
                                        ) : (
                                            <button
                                                value={item.name}
                                                className={`dark:text-blue-400 hover:text-grey-300 ${pathname.includes(item.link) ? "text-grey-300 font-bold" : "" }`}
                                            >
                                                {item.name}
                                            </button>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Box className="flex flex-row items-center ml-4">
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            Aquarium Parameter Checker
                        </Typography>
                        <Divider />
                        <List>
                            {navItems.map((item) => (
                                <Link key={item.name} href={item.link}>
                                    <ListItem  disablePadding>
                                        <ListItemButton sx={{ textAlign: 'left' }}>
                                            {item.link === "/" ? (
                                                <Typography className={`${pathname === "/" ? "text-blue-400 font-bold" : "" }`}>{item.name}</Typography>
                                            ) : (
                                                <Typography className={`${pathname.includes(item.link) ? "text-blue-400 font-bold" : "" }`}>{item.name}</Typography>
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </Box>
    );
}