"use client";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleForm = ({ active, setActive }) => {
    
    const handleClick = (event) => {
        setActive(event.target.value);
    };

    return (
        <ToggleButtonGroup 
            color="primary"
            className="m-4"
            value={active}
            onClick={handleClick}
            aria-label="Platform"
        >
            <ToggleButton 
                value="freshwater" 
                sx={{fontWeight: 600, border: 1 }}
            >
                Fresh Water
            </ToggleButton>
            <ToggleButton 
                value="saltwater" 
                sx={{ fontWeight: 600, border: 1, font: "#000000" }} 
            >
                Salt Water
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleForm;