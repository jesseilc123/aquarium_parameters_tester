"use client";
import React, { useEffect, useState } from 'react';
import ToggleForm from '../components/ToggleForm';
import FreshwaterRanges from './FreshwaterRanges';
import SaltwaterRanges from './SaltwaterRanges'

export default function Ranges() {
    const [active, setActive] = useState("freshwater")
    // let data
    // if (typeof window !== "undefined") {
    //     data = window.localStorage.getItem('RANGE_STATE')
    // }

    // useEffect(() => {
    //     if (data === ""){
    //         setCurrentTab("freshwater")
    //     }
    //     setActive(JSON.parse(data))
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('RANGE_STATE', JSON.stringify(active));
    // }, [active])

    return (
        <main className='flex min-h-screen h-full'>
            <div className="flex h-full w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                <ToggleForm active={active} setActive={setActive}/>
                {active === "freshwater" ? (<FreshwaterRanges />) : (<SaltwaterRanges />)}
            </div>
        </main>
    )
}