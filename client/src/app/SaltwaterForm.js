"use client"; // This is a client component

import * as React from 'react';

import { TextField } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
import { PatternFormat } from 'react-number-format';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/system';
import Results from './Results';
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
            ammonia: (ammonia/ 100),
            // nitrate: nitrate,
            // nitrite: nitrite,
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
        <div className="flex justify-center items-center flex-col gap-4">  
            <form component="form" className="flex flex-col gap-2 justify-center" noValidate onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <TextField
                        className='grid grid-cols-2 overflow-hidden w-1/2 font-sans rounded-lg text-grey-900 dark:text-grey-300 border border-solid bg-white dark:bg-grey-900 hover:border-blue-400 dark:hover:border-blue-400 focus-visible:outline-0 p-1 placeholder-[#a9a9a9]'
                        type="text"
                        value={ammonia}
                        variant="outlined"
                        placeholder='ex: 0.25'
                        sx={{ m: 1, width: '30ch' }}
                        inputProps={{
                            max: 8,
                            min: 0,
                            step: 0.25
                        }}
                        InputProps={{
                            inputComponent: PatternFormatCustom,
                            endAdornment: 
                                <InputAdornment position="end" className='text-grey-300'>ppm(mg/L)</InputAdornment>,
                        }}
                        onChange={(e) => setAmmonia(parseFloat(e.target.value).toFixed(2))}
                    >
                        <button>hello</button>
                    </TextField>
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <HelpIcon className='hover cursor-pointer'/>
                    <TextField
                        type="text"
                        className='placeholder-grey-900'
                        value={nitrate}
                        variant="outlined"
                        placeholder='ex: 0.25'
                        sx={{ m: 1, width: '30ch' }}
                        inputProps={{
                            max: "8",
                            min: "0",
                            step: "0.25"
                        }}
                        InputProps={{
                            inputComponent: PatternFormatCustom,
                            endAdornment: <InputAdornment position="end">ppm(mg/L)</InputAdornment>,
                        }}
                        onChange={(e) => setNitrate(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <Results data={data}/>
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

const PatternFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref,) {
    const { onChange, ...other } = props;
  
    return (
        <PatternFormat
            {...other}
            className='
            col-start-1 col-end-2 row-start-1 row-end-3 text-sm font-sans leading-normal text-grey-900 bg-inherit border-0 rounded-[inherit] dark:text-grey-300 px-3 py-2 outline-0 focus-visible:outline-0 focus-visible:outline-none
            '
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="#.##"
        />
    );
});