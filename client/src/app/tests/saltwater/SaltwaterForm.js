"use client"; // This is a client component

import * as React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { PatternFormat } from 'react-number-format';
import Button from '@mui/material/Button';

export default function SaltwaterForm( { setDisplayResults, setData } ) {
    const [salinity, setSalinity] = React.useState(null);
    const [temperature, setTemperature] = React.useState(null);
    const [pH, setPH] = React.useState(null);
    const [alkalinity, setAlkalinity] = React.useState(null);
    const [ammonia, setAmmonia] = React.useState(null);
    const [nitrite, setNitrite] = React.useState(null);
    const [nitrate, setNitrate] = React.useState(null);
    const [phosphate, setPhosphate] = React.useState(null);

    const [calcium, setCalcium] = React.useState(null);
    const [magnesium, setMagnesium] = React.useState(null);
    const [iodine, setIodine] = React.useState(null);
    const [strontium, setStrontium] = React.useState(null);


    const handleSaltwaterFormSubmit = (event) => {
        event.preventDefault()
        const data = 
            [
                {name:"Salinity", input: salinity, unit: "SG"},
                {name:"Temperature", input: temperature, unit: "°F"},
                {name:"PH", input: pH, unit: ""},
                {name:"Alkalinity", input: alkalinity, unit: "KH"},
                {name: "Ammonia", input: ammonia, unit: "ppm"},
                {name: "Nitrite", input: nitrite, unit: "ppm"},
                {name: "Nitrate", input: nitrate, unit: "ppm"},
                {name:"Phosphate", input: phosphate, unit: "ppm"},
                {name:"Calcium", input: calcium, unit: "ppm"},
                {name:"Magnesium", input: magnesium, unit: "ppm"},
                {name:"Iodine", input: iodine, unit: "ppm"},
                {name:"Strontium", input: strontium,unit: "ppm"},
            ]
        setData(data)
        setDisplayResults(true)
        window.scrollTo(0, 0)
    };
    
    return (
        <form 
            component="form" 
            autoComplete='off' 
            className="flex flex-col items-center justify-center mb-10" 
            noValidate 
            onSubmit={handleSaltwaterFormSubmit}
        >
            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-2 justify-center items-center'>
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={salinity}
                    label="Salinity"
                    placeholder='1.0__'
                    sx={{ display: "flex" , width: 1 }}
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
                    value={temperature}
                    label="Temperature"
                    placeholder='ex: 78'
                    sx={{ display: "flex" , width: 1}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">°F</InputAdornment>,
                    }}
                    onChange={(e) => setTemperature(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setTemperature(null)
                        } else {
                            setTemperature(parseInt(e.target.value))
                        }
                    }}
                    format="##"
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
                    placeholder='ex: 8'
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
                        }
                    }}
                    format="##"
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
                    onBlur={(e) => {setAmmonia(parseFloat(e.target.value).toFixed(2))}}
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
                        }
                    }}
                    format="###"
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
                    onBlur={(e) => {
                        if(e.target.value === "") {
                            setCalcium(null)
                        } else {
                            setCalcium(parseInt(e.target.value))
                        }
                    }}
                    format="###"
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
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setMagnesium(null)
                        } else {
                            setMagnesium(parseInt(e.target.value))
                        }
                    }}
                    format="####"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={iodine}
                    label="Iodine"
                    placeholder='ex: 0.08'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setIodine(e.target.value)}
                    onBlur={(e) => setIodine(parseFloat(e.target.value).toFixed(2))}
                    format="#.##"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={strontium}
                    label="Strontium"
                    placeholder='ex: 10'
                    sx={{ display: "flex", width: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setStrontium(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setStrontium(null)
                        } else {
                            setStrontium(parseInt(e.target.value))
                        }
                    }}
                    format="##"
                />
            </div>
            <Button 
                type="submit" 
                className="mt-4 text-black dark:text-blue-400 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900" 
                variant="contained" 
                sx={{border: 2}}
            >
                Submit
            </Button>
        </form>
    );
};

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

