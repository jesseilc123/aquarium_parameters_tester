"use client";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { white } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[100],
            darker: blue[900],
        },
    },
});

const ToggleForm = ({ active, setActive }) => {
    

    const handleClick = (event) => {
        setActive(event.target.value);
    }
    return(
        <ToggleButtonGroup
            color="primary"
            className="m-4"
            value={active}
            onClick={handleClick}
            aria-label="Platform"
        >
            <ToggleButton className="dark:text-white" value="freshwater">Fresh Water</ToggleButton>
            <ToggleButton className="dark:text-white" value="saltwater">Salt Water</ToggleButton>
        </ToggleButtonGroup>
    )
    
}

export default ToggleForm;