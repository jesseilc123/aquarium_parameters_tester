"use client";
import * as React from 'react';
import ToggleForm from '../components/ToggleForm';
import FreshwaterRanges from './FreshwaterRanges';
import SaltwaterRanges from './SaltwaterRanges'

export default function Ranges() {
    const [active, setActive] = React.useState("freshwater")
    
    return (
        <div className="flex h-fill w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
            <ToggleForm active={active} setActive={setActive}/>
            {active === "freshwater" ? (<FreshwaterRanges />) : (<SaltwaterRanges />)}
        </div>
    )
}