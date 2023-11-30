"use client"; // This is a client component

import * as React from 'react';
import { TextField } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/system';
import { PatternFormat } from 'react-number-format';
import Button from '@mui/material/Button';

export default function FreshwaterForm( { setDisplayResults, setData } ) {
    const [temperature, setTemperature] = React.useState(null)
    const [ammonia, setAmmonia] = React.useState(null)
    const [nitrite, setNitrite] = React.useState(null)
    const [nitrate, setNitrate] = React.useState(null)
    const [pH, setPH] = React.useState(null)
    const [alkalinity, setAlkalinity] = React.useState(null)
    const [gH, setGH] = React.useState(null)


    const handleFreshwaterFormSubmit = (event) => {
        event.preventDefault()
        const data = [
            {name: "Temperature", input: temperature, min: 72,  max: 82, unit: "°F"},
            {name: "Ammonia", input: ammonia, min: 0,  max: 0.1, unit: "ppm"},
            {name: "Nitrite", input: nitrite, min: 0,  max: 0.1, unit: "ppm"},
            {name: "Nitrate", input: nitrate, min: 0,  max: 50, unit: "ppm"},
            {name: "PH", input: pH, min: 6.5,  max: 7.5, unit: ""},
            {name: "Alkalinity", input: alkalinity, min: 4,  max: 8, unit: "KH"},
            {name: "General Hardness", input: gH, min: 4,  max: 12, unit: "GH"},
        ]
        console.log(data)
        setData(data)
        setDisplayResults(true)
        window.scrollTo(0, 0)
    }

    return (
        <div className="flex justify-center items-center flex-col">  
            <form 
                component="form" 
                autoComplete='off' 
                className="flex flex-col gap-2 justify-center items-center mb-8" 
                noValidate 
                onSubmit={handleFreshwaterFormSubmit}
            >
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={temperature}
                    label="Temperature"
                    placeholder='ex: 78'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">°F</InputAdornment>,

                    }}
                    onChange={(e) => setTemperature(e.target.value)}
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
                    placeholder='ex: 10'
                    sx={{ display: "flex", width: 1}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setNitrite(e.target.value)}
                    format="###"
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
                    format="###"
                />
                <Button type="submit" className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-grey-900" variant="contained">Submit</Button>
            </form>
        </div>
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
