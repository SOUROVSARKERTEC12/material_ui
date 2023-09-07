import {Box, MenuItem, TextField} from "@mui/material";
import {useState} from "react";

export const MuiSelect = () => {
    const [countries, setCountries] = useState([])
    console.log({countries})
    const handleChange =(event)=>{
        setCountries(event.target.value)
    }

    return (
        <Box width='250px'>
            <TextField
            label='Select country'
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple:true
            }}
            size='medium'
            color='warning'
            helperText='Please select your country'
            >
                <MenuItem value='BAN'>Bangladesh</MenuItem>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='PAK'>Pakistan</MenuItem>
            </TextField>
        </Box>
    )
}
