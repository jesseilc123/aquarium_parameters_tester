"use client"; // This is a client component

import * as React from 'react';
import FreshwaterForm from "./FreshwaterForm";
import FreshwaterResults from './FreshwaterResults';

export default function FreshwaterPage() {
    const [displayResults, setDisplayResults] = React.useState(false)
    const [data, setData] = React.useState()

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
    )
}