"use client";
import React, { useEffect, useState } from 'react';
import ToggleForm from '../components/ToggleForm';
import FreshwaterRanges from './FreshwaterRanges';
import SaltwaterRanges from './SaltwaterRanges'

export default function Ranges() {
    const [active, setActive] = useState("freshwater")

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        console.log(data)
        // console.log("Local Storage to set State", data)
        setActive(JSON.parse(data))
        console.log(active)
    }, [])

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('MY_APP_STATE'));
        if (active !== data) {
            console.log("State", active)
            window.localStorage.setItem('MY_APP_STATE', JSON.stringify(active));
        } else {
            setActive(active)
        }
    }, [active])

    return (
        <main className='flex min-h-screen h-full'>
            <div className="flex h-full w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterRanges setActive={setActive}/>) : (<SaltwaterRanges setActive={setActive}/>)}
            </div>
        </main>
    )
}