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
import { fowlrParameters, reefParameters } from '../../constants/index'


export default function SaltwaterResults( {data, setDisplayResults }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = React.useState("Reef");

    let count = 0

    const [aquariumType, setAquariumType] = React.useState(reefParameters)

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
            setAquariumType(reefParameters)
            setName(event.target.value)
        } else if (event.target.value === "FOWLR") {
            setAquariumType(fowlrParameters)
            setName(event.target.value)
        }
        setAnchorEl(null);
    };

    return (
        <div className='flex flex-col px-2 w-full sm:min-w-[440px]'>
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
            <Paper sx={{ width: "100%", maxWidth: 440, overflow: 'hidden' }} className='border-2 border-black'>
                <TableContainer >
                    <Table stickyHeader aria-label="simple table">
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
            </Paper>
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