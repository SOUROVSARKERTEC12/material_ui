import {FormControl, Input, InputAdornment, InputLabel, Stack, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";

export const MuiTextField = () => {
    const [value, setValue] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField id="filled-basic" label="Filled" variant="filled"/>
                <TextField id="standard-basic" label="Standard" variant="standard"/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField id="standard-basic" label='small Secondary' size='small' color='secondary'/>
                <TextField label='password' size='large' color='primary'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' color='secondary' required/>
                <TextField label='Passoword' type='password' color='error' helperText='Share your password Info'
                           disabled/>
                <TextField label='read-only' color='warning' InputProps={{readOnly: true}}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Correct Input"
                           required
                           value={value}
                           onChange={e => setValue(e.target.value)}
                           error={!value}
                           helperText={!value ? 'Required' : "Do not share!!"}
                />
            </Stack>
        </Stack>
    )
}
