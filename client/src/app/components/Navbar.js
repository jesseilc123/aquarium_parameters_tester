"use client"; // This is a client component
import React, { useState, useContext } from "react"
import ThemeToggle from './ThemeToggle';
import { 
    Avatar, 
    Typography, 
    Toolbar, 
    CssBaseline, 
    Box, 
    AppBar, 
    useScrollTrigger, 
    Slide, 
    Drawer, 
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton,
    Button,
    Tooltip, 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from "../constants";
import { UserContext } from "../providers";

export default function Navbar( { darkMode, setDarkMode } ) {
    const { user, setUser } = useContext(UserContext);
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    
    let win = 0;

    if (typeof window != "undefined"){
        win = window
    };

    const trigger = useScrollTrigger({
        target: (typeof window !== "undefined") ? window : undefined,
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    function handleLogout() {
        fetch("http://localhost:5555/logout", { method: "DELETE" })
            .then(r => {
                if (r.ok) {
                    setUser(null)
                } else {
                    console.log(r)
            }
        })
    }

    return (
        <Box> 
            <CssBaseline />
            <Slide appear={false} direction="down" in={ win.innerWidth > 697 ? true : !trigger} sx={{ display: {sm: "absolute" }}}>
                <AppBar 
                    component="nav" 
                    id="navbar" 
                    className={`dark:bg-grey sm:fixed`}
                >
                    <Toolbar className='flex w-full justify-between'>
                        <div className="flex flex-row gap-4 items-center lg:justify-start mr-4 md:mr-0 w-[200px] lg:w-[700px]">
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
                                className='hidden lg:flex  w-[300px]'
                            >
                                Aquarium Parameter Checker
                            </Typography>
                        </div>
                        <div className='flex flex-row items-center gap-3 justify-between sm:justify-end w-full'>
                            <div className='md:flex flex-row items-center gap-2 hidden'>
                                {navItems.map((item) => (
                                    <div key={item.link}>
                                        {item.link === "/" ? (
                                            <Button 
                                                variant="contained"
                                                className={`dark:hover:bg-blue-400 hover:bg-white hover:text-black text-white dark:text-blue-400 dark:hover:text-black ${pathname === "/" ? "dark:bg-blue-400 bg-white" : null }`}
                                            >
                                                <Link
                                                    href={item.link}
                                                    className={`dark:hover:text-black hover:text-black ${pathname === "/" ? "font-bold dark:text-black text-black" : null}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Tooltip title={item.name === 'Dashboard' && !user ? "Login to view" : null} followCursor>
                                                <span>
                                                    <Button 
                                                        variant="contained" 
                                                        disabled={item.name === 'Dashboard' && !user ? true : false}
                                                        className={`dark:hover:bg-blue-400 hover:bg-white hover:text-black text-white dark:text-blue-400 dark:hover:text-black ${pathname.includes(item.link) ? "dark:bg-blue-400 bg-white" : null }`}
                                                    >
                                                        <Link
                                                            href={item.link}
                                                            className={` dark:hover:text-black hover:text-black ${pathname.includes(item.link) ? "font-bold dark:text-black text-black" : null } ${item.name === 'Dashboard' && !user ? "text-grey-500": null}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </Button>
                                                </span>
                                            </Tooltip>
                                        )}
                                    </div>
                                ))}
                                <Button variant="outlined" className={`font-semibold border-2  ${!user ? `dark:border-blue-400  dark:hover:bg-blue-400  dark:hover:text-grey-900 border-white  hover:text-black hover:bg-white ${pathname === "/login" ? "dark:bg-blue-400 bg-white text-black dark:text-black" : "text-white dark:text-blue-400"}` : "hover:border-red-500 hover:text-red-500 bg-[#1976D2] border-white text-white dark:bg-[#3F4345] dark:border-blue-400 dark:text-blue-400 dark:hover:text-red-500 dark:hover:border-red-500" }`} sx={{ border: 2 }}>
                                    {!user ? (<Link href="/login">Login</Link>) : (<Typography onClick={handleLogout}>Sign out</Typography>)}
                                </Button>
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
                                <Tooltip 
                                    key={item.name}  
                                    title={item.name === 'Dashboard' && !user ? "Login to view" : null}
                                    followCursor
                                >
                                    <ListItem>
                                        <ListItemButton disabled={item.name === 'Dashboard' && !user ? true : false}>
                                            {item.link === "/" ? (
                                                <Link 
                                                    href={item.link} 
                                                    className={`${pathname === "/" ? "text-[#1976D2] dark:text-blue-400 font-bold" : null }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <Link 
                                                    href={item.link} 
                                                    className={`${pathname.includes(item.link) ? "text-[#1976D2] dark:text-blue-400 font-bold" : null } ${item.name === 'Dashboard' && !user ? "text-grey-500" : null }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                </Tooltip>
                            ))}
                            <Button variant="outlined" className={`font-semibold border-2  ${!user ? "dark:text-blue-400 dark:border-blue-400  dark:hover:bg-blue-400  dark:hover:text-grey-900 hover:bg-[#1976D2] hover:border-[#1976D2] hover:text-white" : "hover:border-red-500 hover:text-red-500 bg-[#1976D2] border-white text-white dark:bg-[#3F4345] dark:border-blue-400 dark:text-blue-400 dark:hover:text-red-500 dark:hover:border-red-500" }`} sx={{ border: 2 }}>
                                {!user ? (<Link href="/login">Login</Link>) : (<Typography onClick={handleLogout}>Sign out</Typography>)}
                            </Button>
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </Box>
    );
};