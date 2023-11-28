"use client";
import React, { useState } from 'react'
import FreshwaterForm from './FreshwaterForm'
import SaltwaterForm from './SaltwaterForm'
import Navbar from './Navbar'
import ToggleForm from './ToggleForm'


export default function Home() {
  const [active, setActive] = useState("freshwater")

  return (
    <main className="bg-white dark:bg-grey h-screen">
        <Navbar />
        <div className="flex bg-white dark:bg-grey dark:text-blue-400 h-full w-full items-center justify-center flex-col mt-24 xs:mt-1">
            <ToggleForm active={active} setActive={setActive}/>
            {active === "freshwater" ? (<FreshwaterForm />) : (<SaltwaterForm />)}
        </div>   
    </main>
  );
};
