"use client";

import React, { useState } from 'react';
import ToggleForm from "../components/ToggleForm"
import SaltwaterPage from "./saltwater/SaltwaterPage"
import FreshwaterPage from "./freshwater/FreshwaterPage";

export default function Tests() {
    const [active, setActive] = useState("freshwater");
    
    return (
        <main className='flex w-full h-full flex-col'>
            <div className="flex h-full w-full items-center flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)}
            </div>
        </main>
    );
};