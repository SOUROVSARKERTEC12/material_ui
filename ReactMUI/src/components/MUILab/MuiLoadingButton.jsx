import {Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';

export const MuiLoadingButton = () => {
    console.log('hello')
    return (
        <Stack spacing={2} direction='row'>
            <LoadingButton variant='outlined'>Submit</LoadingButton>
            <LoadingButton loading variant='outlined'>Submit</LoadingButton>
            <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>Fetch data</LoadingButton>

            <LoadingButton variant='outlined' loadingPosition="start"
                           startIcon={<SaveIcon/>}
            >
                Save
            </LoadingButton>
            <LoadingButton loading variant='outlined' loadingPosition="start"
                           startIcon={<SaveIcon/>}
            >
                Save
            </LoadingButton>
        </Stack>
    )
}
