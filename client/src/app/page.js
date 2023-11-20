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
      <div className="flex bg-white dark:bg-grey dark:text-blue-400 mt-[300px] items-center justify-center flex-col">
        <ToggleForm active={active} setActive={setActive}/>
        {active === "freshwater" ? (<FreshwaterForm />) : (<SaltwaterForm />)}
      </div>   
    </main>
  );
};
