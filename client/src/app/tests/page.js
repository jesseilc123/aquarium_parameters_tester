"use client";

import React, { useState, useEffect } from 'react';
import ToggleForm from "../components/ToggleForm"
import SaltwaterPage from "./saltwater/SaltwaterPage"
import FreshwaterPage from "./freshwater/FreshwaterPage";

export default function Tests() {
    const data = window.localStorage.getItem('TEST_STATE')
    const [active, setActive] = useState("freshwater")

    useEffect(() => {
        if (data === ""){
            setCurrentTab("freshwater")
        }
        setActive(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('TEST_STATE', JSON.stringify(active));
    }, [active])

    return (
        <main className='flex min-h-screen h-full flex-col'>
            <div className="flex h-full w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)}
            </div>
        </main>
    );
};