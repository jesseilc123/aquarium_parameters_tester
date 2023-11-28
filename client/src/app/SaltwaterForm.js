"use client"; // This is a client component

import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { PatternFormat, NumericFormat } from 'react-number-format';
import HelpIcon from '@mui/icons-material/Help';
import { makeStyles } from '@mui/material';
import Results from './Results';


// const useStyles = makeStyles({})


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
            <form component="form" className="flex flex-col gap-2 justify-center items-center" noValidate onSubmit={handleSubmit}>
                <PatternFormat
                    customInput={TextField}
                    type="text"
                    value={ammonia}
                    label="Ammonia"
                    placeholder='ex: 0.25'
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end" className=' text-grey-300'>ppm(mg/L)</InputAdornment>,
                    }}
                    // onValueChange={({ value: v }) => onChange({ target: { name, value: v } })}
                    onChange={(e) => setAmmonia(parseFloat(e.target.value).toFixed(2))} 
                    format="#.##"
                />
                {/* <TextField
                    type="text"
                    value={ammonia}
                    label="Ammonia"
                    placeholder='ex: 0.25'
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        inputComponent: PatternFormatCustom,
                        endAdornment: 
                            <InputAdornment position="end" className=' text-grey-300'>ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setAmmonia(parseFloat(e.target.value).toFixed(2))}
                /> */}
                <TextField
                    type="text"
                    value={ammonia}
                    label="Nitrate"
                    placeholder='ex: 10'
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: 
                            <InputAdornment position="end" className=' text-grey-300'>ppm(mg/L)</InputAdornment>,
                    }}
                    onChange={(e) => setAmmonia(parseFloat(e.target.value).toFixed(2))}
                />
            </form>
            <Results data={data}/>
        </div>
    )
}

// const InputAdornment = styled('div')(
//     ({ theme }) => `
//         margin: 8px;
//         display: inline-flex;
//         align-items: center;
//         justify-content: center;
//         grid-row: 1/3;
//         color: #a9a9a9;
//     `,
// );

const PatternFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref,) {
    const { onChange, ...other } = props;
  
    return (
        <PatternFormat
            {...other}
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

const NumberFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref,) {
    const { onChange, ...other } = props;
  
    return (
        <NumericFormat 
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            allowNegative={false}
            format="#.##"
        />
    );
});
