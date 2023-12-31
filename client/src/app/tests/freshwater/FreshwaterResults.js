"use client";  // This is a client component

import React from 'react'
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
import { communityParameters, cichlidParameters,  plantsDiscusParameters, brackishParameters, pondParameters} from '../../constants/index'

export default function FreshwaterResults( {data, setDisplayResults }){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = React.useState("Freshwater Community");

    let count = 0

    const [aquariumType, setAquariumType] = React.useState(communityParameters)

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
        if (event.target.value === "Freshwater Community"){
            setAquariumType(communityParameters)
            setName(event.target.value)
        } else if (event.target.value === "African Cichlid") {
            setAquariumType(cichlidParameters)
            setName(event.target.value)
        } else if (event.target.value === "Freshwater Plants & Discus") {
            setAquariumType(plantsDiscusParameters)
            setName(event.target.value)
        } else if (event.target.value === "Brackish") {
            setAquariumType(brackishParameters)
            setName(event.target.value)
        } else if (event.target.value === "Pond") {
            setAquariumType(pondParameters)
            setName(event.target.value)
        }
        setAnchorEl(null);
    };

    return (
        <div className='mx-2'>
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
                    <p className='text-overflow: ellipsis'>{name}</p>
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
                        <button value="Freshwater Community" className="items-center justify-center" onClick={(event) => handleClose(event)}>
                            Freshwater Community
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button value="African Cichlid" className="items-center justify-center" onClick={(event) => handleClose(event)}>
                            African Cichlid
                        </button>
                    </MenuItem>   
                    <MenuItem>
                        <button value="Freshwater Plants & Discus" className="items-center justify-center" onClick={(event) => handleClose(event)}>
                            Freshwater Plants & Discus
                        </button>
                    </MenuItem> 
                    <MenuItem>
                        <button value="Brackish" className="items-center justify-center" onClick={(event) => handleClose(event)}>
                            Brackish
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button value="Pond" className="items-center justify-center" onClick={(event) => handleClose(event)}>
                            Pond
                        </button>
                    </MenuItem>
                </Menu>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" sx={{border: 2}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Test</TableCell>
                            <TableCell align="right">Input</TableCell>
                            <TableCell align="right">Range</TableCell>
                            <TableCell align="right">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => {
                            if(item.input !== null && item.input !== "NaN" && item.input !== ""){
                                return(
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                                        <TableCell align="right">{handleResult(item.input, index)}
                                        </TableCell>
                                    </TableRow> 
                                )
                            } else {count+=1}      
                        })}
                        {count > 6 ? (
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
                        sx={{border: 2}}
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