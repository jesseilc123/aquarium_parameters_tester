"use client";
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleForm = ({ active, setActive }) => {
    

    const handleChange = (event) => {
        setActive(event.target.value);
    }
    return(
        <ToggleButtonGroup
            color="primary"
            exclusive
            value={active}
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="freshwater">Fresh Water</ToggleButton>
            <ToggleButton value="saltwater">Salt Water</ToggleButton>
        </ToggleButtonGroup>
    )
    
}

export default ToggleForm;