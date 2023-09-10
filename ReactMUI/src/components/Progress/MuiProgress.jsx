import {CircularProgress, LinearProgress, Stack} from "@mui/material";

export const MuiProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress/>
            <CircularProgress color='success'/>
            <CircularProgress color='error' variant='determinate' value={75}/>

            <LinearProgress/>
            <LinearProgress color='success'/>
            <LinearProgress color='error' variant='determinate' value={75}/>
        </Stack>
    )
}
