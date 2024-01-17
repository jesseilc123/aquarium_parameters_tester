"use client"; // This is a client component

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { PatternFormat } from 'react-number-format';

export default function FreshwaterForm( { setDisplayResults, setData } ) {
    const [temperature, setTemperature] = useState(null);
    const [ammonia, setAmmonia] = useState(null);
    const [nitrite, setNitrite] = useState(null);
    const [nitrate, setNitrate] = useState(null);
    const [pH, setPH] = useState(null);
    const [alkalinity, setAlkalinity] = useState(null);
    const [gH, setGH] = useState(null);


    const handleFreshwaterFormSubmit = (event) => {
        event.preventDefault()
        const data = [
            {name: "Temperature", input: temperature, unit: "°F"},
            {name: "Ammonia", input: ammonia, unit: "ppm"},
            {name: "Nitrite", input: nitrite, unit: "ppm"},
            {name: "Nitrate", input: nitrate, unit: "ppm"},
            {name: "PH", input: pH, unit: ""},
            {name: "Alkalinity", input: alkalinity, unit: "KH"},
            {name: "General Hardness", input: gH, unit: "GH"},
        ]
        setData(data);
        setDisplayResults(true);
        window.scrollTo(0, 0);
    };

    return (
        <form 
            component="form" 
            autoComplete='off' 
            className="flex flex-col gap-2 justify-center items-center" 
            noValidate 
            onSubmit={handleFreshwaterFormSubmit}
        >
            <PatternFormat
                customInput={TextField}
                type="text"
                value={temperature}
                label="Temperature"
                placeholder='ex: 78'
                sx={{ display: "flex", width: 1}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">°F</InputAdornment>,

                }}
                onChange={(e) => setTemperature(e.target.value)}
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setTemperature(null)
                    } else {
                        setTemperature(parseInt(e.target.value))
                    };
                }}
                format="###"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                value={ammonia}
                label="Ammonia"
                placeholder='ex: 0.25'
                sx={{ display: "flex", width: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                }}
                onChange={(e) => setAmmonia(e.target.value)}
                onBlur={(e) => setAmmonia(parseFloat(e.target.value).toFixed(2))}
                format="#.##"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                value={nitrite}
                label="Nitrite"
                placeholder='ex: 0.25'
                sx={{ display: "flex", width: 1}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                }}
                onChange={(e) => setNitrite(e.target.value)}
                onBlur={(e) => setNitrite(parseFloat(e.target.value).toFixed(2))}
                format="#.##"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                className='text-white'
                value={nitrate}
                label="Nitrate"
                placeholder='ex: 10'
                sx={{ display: "flex", width: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                }}
                onChange={(e) => setNitrate(e.target.value)}
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setNitrate(null)
                    } else {
                        setNitrate(parseInt(e.target.value))
                    };
                }}
                format="###"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                value={pH}
                label="pH"
                placeholder='ex: 7.4'
                sx={{ display: "flex", width: 1 }}
                onChange={(e) => setPH(e.target.value)}
                onBlur={(e) => setPH(parseFloat(e.target.value).toFixed(1))}
                format="#.#"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                value={alkalinity}
                label="Alkalinity"
                placeholder='ex: 6'
                sx={{ display: "flex", width: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">KH</InputAdornment>,
                }}
                onChange={(e) => setAlkalinity(e.target.value)}
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setAlkalinity(null)
                    } else{
                        setAlkalinity(parseInt(e.target.value))
                    };
                }}
                format="##"
            />
            <PatternFormat
                customInput={TextField}
                type="text"
                value={gH}
                label="General Hardness"
                placeholder='ex: 4'
                sx={{ display: "flex", width: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">GH</InputAdornment>,
                }}
                onChange={(e) => setGH(e.target.value)}
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setGH(null)
                    } else{
                        setGH(parseInt(e.target.value))
                    };
                }}
                format="###"
            />
            <Button 
                type="submit" 
                className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                variant="contained"
                sx={{ border: 2 }}
            >
                Submit
            </Button>
        </form>
    );
}

const InputAdornment = styled('div')(
    ({ theme }) => `
        margin: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        grid-row: 1/3;
        color: #a9a9a9;
    `,
);
