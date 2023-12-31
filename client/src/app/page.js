"use client";

// import * as React from 'react';
// import ToggleForm from './components/ToggleForm'
// import SaltwaterPage from './tests/saltwater/SaltwaterPage'
// import FreshwaterPage from './tests/freshwater/FreshwaterPage';

export default function Home() {
    // const [active, setActive] = React.useState("freshwater")

    return (
        <main className='flex min-h-screen h-full flex-col'>
            <div className="flex h-full w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                {/* <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterPage />) : (<SaltwaterPage  />)} */}
                Home
            </div>
        </main>
    );
};