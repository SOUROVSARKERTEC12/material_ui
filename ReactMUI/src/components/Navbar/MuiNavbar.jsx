import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Button from "@mui/material/Button";

export const MuiNavbar = () => {
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
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
