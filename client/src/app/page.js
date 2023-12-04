"use client";

import * as React from 'react';
import ToggleForm from './components/ToggleForm'
import SaltwaterPage from './saltwater/SaltwaterPage'
import FreshwaterPage from './freshwater/FreshwaterPage';


export default function Home() {
    const [active, setActive] = React.useState("freshwater")

    return (
        <main className='flex min-h-screen h-full'>
            <div className="flex h-fill w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)}
            </div>   
        </main>
    );
};