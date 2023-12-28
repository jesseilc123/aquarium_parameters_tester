"use client";  // This is a client component

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { fowlrParamters, reefParamters } from '../constants/index'


export default function SaltwaterResults( {data, setDisplayResults }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = React.useState("Reef");

    let count = 0

    // const reefParamters = [
    //     {name:"Salinity", min: parseFloat(1.023).toFixed(3), max: 1.025},
    //     {name:"Temperature", min: 72, max: 78},
    //     {name:"PH", min: 8.1, max: 8.4 },
    //     {name:"Alkalinity", min: 8, max: 12},
    //     {name: "Ammonia", min: 0,  max: 0},
    //     {name: "Nitrite", min: 0,  max: 0},
    //     {name: "Nitrate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    //     {name:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    //     {name:"Calcium", min: 350,  max: 450},
    //     {name:"Magnesium", min: 1250,  max: 1350},
    //     {name:"Iodine", min: 0.06,  max: parseFloat(0.10).toFixed(2)},
    //     {name:"Strontium", min: 8,  max: 14},
    // ]

    // const fowlrParamters = [
    //     {name:"Salinity", min: parseFloat(1.020).toFixed(3), max: 1.025},
    //     {name:"Temperature", min: 72, max: 78},
    //     {name:"PH", min: 8.1, max: 8.4 },
    //     {name:"Alkalinity", min: 8, max: 12},
    //     {name: "Ammonia", min: 0,  max: 0},
    //     {name: "Nitrite", min: 0,  max: 0},
    //     {name: "Nitrate", min: 0,  max: 30},
    //     {name:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    //     {name:"Calcium", min: 350,  max: 450},
    //     {name:"Magnesium", min: 1150,  max: 1350},
    //     {name:"Iodine", min: 0.04,  max: parseFloat(0.10).toFixed(2)},
    //     {name:"Strontium", min: 8,  max: 14},
    // ]

    const [aquariumType, setAquariumType] = React.useState(reefParamters)

    function handleResult (input, index) {
        if (input < aquariumType[index].min) return (<p className='text-[#FF0000] font-semibold cursor-pointer'>LOW</p>)
        else if(input > aquariumType[index].max) return (<p className='text-[#FF0000] font-semibold'>HIGH</p>)
        else return (<p className='text-[#008000] font-semibold'>GOOD</p>)
    }

    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        if (event.target.value === "Reef"){
            setAquariumType(reefParamters)
            setName(event.target.value)
        } else if (event.target.value === "FOWLR") {
            setAquariumType(fowlrParamters)
            setName(event.target.value)
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <div>
                <div className='flex flex-row items-center justify-between'>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Aquarium type
                    </Button>
                    <p className='pr-2'>{name}</p>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    className='flex items-center justify-center'
                >
                    <MenuItem>
                        <button value="Reef" className="items-center justify-center" onClick={(event) => handleClose(event)}>Reef</button>
                    </MenuItem>
                    <MenuItem>
                        <button value="FOWLR" className="items-center justify-center" onClick={(event) => handleClose(event)}>FOWLR</button>
                    </MenuItem>    
                </Menu>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" sx={{border: 2}}>
                    <TableHead>
                        <TableRow color="warning" sx={{borderBottom: 2}}>
                            <TableCell sx={{backgroundColor: "primary"}}>Test</TableCell>
                            <TableCell align="right">Input</TableCell>
                            <TableCell align="right">Range</TableCell>
                            <TableCell align="right">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => {
                            if (
                                item.input !== null 
                                && item.input !== "NaN"
                                && item.input !== 0 
                                && item.input !== ""
                            ) {
                                return(
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.name}{item.unit != "" ? ` (${item.unit})` : ""}
                                        </TableCell>
                                        <TableCell align="right">{item.input}</TableCell>
                                        <TableCell align="right">
                                            {aquariumType[index].min - aquariumType[index].max !== 0 ? 
                                                (`${aquariumType[index].min} - ${aquariumType[index].max}`)
                                             : (aquariumType[index].min)
                                            }
                                        </TableCell>
                                        <TableCell align="right">{handleResult(item.input, index, item.unit)}</TableCell>
                                    </TableRow> 
                                )
                            } else {count+=1}      
                        })}
                        {count > 11 ? (
                            <TableRow>
                                <TableCell>No Data</TableCell>
                            </TableRow>
                            ) : (null)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex items-center justify-center mb-8'>
                <Button 
                        type="button" 
                        className="text-black dark:text-blue-400 mt-4 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900" 
                        variant="contained"
                        sx={{border: 2 }}
                        onClick={() => {
                            window.scrollTo(0, 0)
                            setDisplayResults(false)
                        }}
                    >
                        Back
                </Button>
            </div>
        </div> 
    )
}