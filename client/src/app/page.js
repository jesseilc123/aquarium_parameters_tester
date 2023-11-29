"use client";

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ToggleForm from './components/ToggleForm'
import SaltwaterPage from '@/saltwater/SaltwaterPage';
import FreshwaterPage from './freshwater/FreshwaterPage';


export default function Home() {
  const [active, setActive] = useState("freshwater")

  return (
    <main className="bg-white dark:bg-grey h-screen">
        <Navbar />
        <div className="flex bg-white dark:bg-grey dark:text-blue-400 h-full w-full items-center justify-start flex-col mt-[75px]">
            <ToggleForm active={active} setActive={setActive}/>
            {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)}
        </div>   
    </main>
  );
};
