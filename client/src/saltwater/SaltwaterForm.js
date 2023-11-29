"use client"; // This is a client component

import * as React from 'react';
import { TextField } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/system';
import { PatternFormat } from 'react-number-format';
import SaltwaterResults from './SaltwaterResults';
import Button from '@mui/material/Button';

export default function SaltwaterForm( { setDisplayResults, setData } ) {

    const [ammonia, setAmmonia] = React.useState(null)
    const [nitrate, setNitrate] = React.useState(null)
    const [nitrite, setNitrite] = React.useState(null)
    const [phosphate, setPhosphate] = React.useState(null)

    const [calcium, setCalcium] = React.useState(null)
    const [alkalinity, setAlkalinity] = React.useState(null)
    const [magnesium, setMagnesium] = React.useState(null)

    const [salinity, setSalinity] = React.useState(null)
    const [pH, setPH] = React.useState(null)
    const [chlorine, setChlorine] = React.useState(null)


    const handleSaltwaterFormSubmit = (event) => {
        event.preventDefault()
        const data = 
            [
                {name: "Ammonia", input: ammonia, bottom: 0,  top: 0.1},
                {name: "Nitrate", input: nitrate, bottom: 10,  top: 20},
                {name: "Nitrite", input: nitrite, bottom: 0,  top: 0.1},
                {name:"Phosphate", input: phosphate, bottom: 0,  top: 0.1},
                {name:"Calcium", input: calcium},
                {name:"Alkalinity", input: alkalinity},
                {name:"Magnesium", input: magnesium},
                {name:"Salinity", input: salinity},
                {name:"PH", input: pH},
                {name:"Chlorine", input: chlorine},
            ]
        console.log(data)
        setData(data)
        setDisplayResults(true)
    }
    
    return (
        <div className="flex justify-center items-center flex-col">  
            <form 
                component="form" 
                autoComplete='off' 
                className="flex flex-col gap-2 justify-center items-center mb-8" 
                noValidate 
                onSubmit={handleSaltwaterFormSubmit}
            >
                {/* Water Cycle */}
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
                    onBlur={(e) => {
                        const value = parseFloat(e.target.value).toFixed(2)
                        setAmmonia(value)
                    }}
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
                    classes={{
                        textfield: "bg-white rounded-xl"
                    }}
                    onChange={(e) => setNitrate(e.target.value)}
                    format="###"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={salinity}
                    label="Salinity"
                    placeholder='1.0'
                    sx={{ display: "flex" , width: 1}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">SG</InputAdornment>,
                    }}
                    onChange={(e) => setSalinity(e.target.value)}
                    onBlur={(e) => setSalinity(parseFloat(e.target.value).toFixed(3))}
                    format="1.0##"
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
                    value={chlorine}
                    label="Chlorine"
                    placeholder='ex: 0.8'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,

                    }}
                    onChange={(e) => setChlorine(e.target.value)}
                    onBlur={(e) => setChlorine(parseFloat(e.target.value).toFixed(1))}
                    format="#.#"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={phosphate}
                    label="Phosphate"
                    placeholder='ex: 0.25'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setPhosphate(e.target.value)}
                    onBlur={(e) => setPhosphate(parseFloat(e.target.value).toFixed(2))}
                    format="#.##"
                />
                {/* Corals */}
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={calcium}
                    label="Calcium"
                    placeholder='ex: 380'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setCalcium(e.target.value)}
                    format="###"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={alkalinity}
                    label="Alkalinity"
                    placeholder='ex: 8'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">dKH</InputAdornment>,
                    }}
                    onChange={(e) => setAlkalinity(e.target.value)}
                    format="##"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={magnesium}
                    label="Magnesium"
                    placeholder='ex: 1200'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setMagnesium(e.target.value)}
                    format="####"
                />
                <Button 
                    type="submit" 
                    className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-grey-900" variant="contained"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
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

