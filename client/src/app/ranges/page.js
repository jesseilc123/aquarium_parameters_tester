"use client";
import React, { useEffect, useState } from 'react';
import ToggleForm from '../components/ToggleForm';
import FreshwaterRanges from './FreshwaterRanges';
import SaltwaterRanges from './SaltwaterRanges'

export default function Ranges() {
    // const data = window.localStorage.getItem('RANGE_STATE')
    // if (data === undefined) {
    //     window.localStorage.setItem('RANGE_STATE', JSON.stringify("freshwater"))
    // }
    const [active, setActive] = useState("freshwater")

    // useEffect(() => {
    //     if (data === ""){
    //         setCurrentTab("freshwater")
    //     }
    //     setActive(JSON.parse(data))
    // }, [data])

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