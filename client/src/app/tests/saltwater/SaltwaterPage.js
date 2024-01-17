"use client"; // This is a client component
import React, { useState } from 'react';
import SaltwaterForm from "./SaltwaterForm";
import SaltwaterResults from './SaltwaterResults';

export default function SaltwaterPage() {
    const [displayResults, setDisplayResults] = React.useState(false)
    const [data, setData] = React.useState()

    return (
        <div className='mb-10'>
            {!displayResults ? 
                (
                    <SaltwaterForm setDisplayResults={setDisplayResults} setData={setData}/>
                ) : (
                    <SaltwaterResults data={data} setDisplayResults={setDisplayResults}/>
                )
            }
        </div>
    );
};