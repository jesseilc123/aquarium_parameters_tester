"use client"; // This is a client component

import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FreshwaterForm() {
    return (
        <div className="flex justify-center items-center">  
            <form autoComplete="off" className="flex flex-col">
                <TextField id="Ammonia" label="Ammonia" variant="standard"/>
                <TextField id="Nitrite" label="Nitrite" variant="standard" />
                <TextField id="Chlorine" label="Chlorine" variant="standard" />
                <TextField id="pH" label="pH" variant="standard" />
                <TextField id="GH" label="GH" variant="standard" />
                <TextField id="KH" label="KH" variant="standard" />
                <TextField id="Phosphate" label="Phosphate" variant="standard" />
                <TextField id="Copper" label="Copper" variant="standard" />
                <TextField id="CO2" label="CO2" variant="standard" />
            </form>
        </div>
    );
}