"use client";

import * as React from 'react';
import Navbar from './components/Navbar'
import ToggleForm from './components/ToggleForm'
import SaltwaterPage from '@/saltwater/SaltwaterPage';
import FreshwaterPage from './freshwater/FreshwaterPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home() {
  const [active, setActive] = React.useState("freshwater")
  const [darkMode, setDarkMode] = React.useState(true)

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <main >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div className="flex bg-white dark:bg-grey dark:text-blue-400 h-full w-full items-center justify-start flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)}
            </div>   
        </main>
    </ThemeProvider>
    );
};
