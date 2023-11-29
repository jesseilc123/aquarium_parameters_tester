"use client"; // This is a client component

import * as React from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { PatternFormat, NumericFormat } from 'react-number-format';
import Results from './Results';
import Button from '@mui/material/Button';

export default function SaltwaterForm() {

    const [ammonia, setAmmonia] = React.useState("")
    const [nitrate, setNitrate] = React.useState("")
    const [nitrite, setNitrite] = React.useState("")
    const [phosphate, setPhosphate] = React.useState("")

    const [calcium, setCalcium] = React.useState("")
    const [alkalinity, setAlkalinity] = React.useState("")
    const [magnesium, setMagnesium] = React.useState("")

    const [salinity, setSalinity] = React.useState("")
    const [pH, setPH] = React.useState("")
    const [chlorine, setChlorine] = React.useState("")

    const [data, setData] = React.useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            ammonia: ammonia,
            nitrate: nitrate,
            nitrite: nitrite,
            // phosphate: phosphate,
            // calcium: calcium,
            // alkalinity: alkalinity,
            // magnesium: magnesium,
            // salinity: salinity,
            // pH: pH,
            // chlorine: chlorine,
        }
        console.log(data)
        setData(data)
    }

    return (
        <div className="flex justify-center items-center flex-col">  
            <form component="form" autoComplete='off' className="flex flex-col justify-center items-center" noValidate onSubmit={handleSubmit}>
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={ammonia}
                    label="Ammonia"
                    placeholder='ex: 0.25'
                    sx={{ border:"white", m: 1, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setAmmonia(e.target.value)} 
                    format="#.##"
                />
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    className='text-white'
                    value={nitrate}
                    label="Nitrate"
                    placeholder='ex: 10'
                    sx={{ color: "white", m: 1, width: '25ch' }}
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
                    value={nitrite}
                    label="Nitrate"
                    placeholder='ex: 10'
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setNitrite(e.target.value)}
                    format="###"
                />
                <Button type="submit" className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-grey-900" variant="contained">Submit</Button>
            </form>
            <Results data={data}/>
        </div>
    )
}

