import {AppBar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'
                            id='resources-button'
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon/>}
                    >
                        Resources
                    </Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu
                    id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
