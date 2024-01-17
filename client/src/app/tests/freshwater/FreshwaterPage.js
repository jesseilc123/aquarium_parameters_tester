"use client"; // This is a client component

import React, { useState } from 'react';
import FreshwaterForm from "./FreshwaterForm";
import FreshwaterResults from './FreshwaterResults';

export default function FreshwaterPage() {
    const [displayResults, setDisplayResults] = useState(false);
    const [data, setData] = useState();

    return (
        <div>
            {!displayResults ? 
                (
                    <FreshwaterForm setDisplayResults={setDisplayResults} setData={setData}/>
                ) : (
                    <FreshwaterResults data={data} setDisplayResults={setDisplayResults}/>
                )
            }
        </div>
    );
};