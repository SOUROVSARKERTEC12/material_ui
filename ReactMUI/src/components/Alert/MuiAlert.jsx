import {Alert, AlertTitle, Stack} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Button from "@mui/material/Button";

export const MuiAlert = () => {
    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Alert severity="error" onClose={() => alert('Close alert')}><AlertTitle>Error</AlertTitle>This is an error
                alert — check it out!</Alert>
            <Alert severity="warning"><AlertTitle>Warning</AlertTitle>This is a warning alert — check it out!</Alert>
            <Alert severity="info"><AlertTitle>Info</AlertTitle>This is an info alert — check it out!</Alert>
            <Alert severity="success"><AlertTitle>Success</AlertTitle>This is a success alert — check it out!</Alert>

            <Alert variant='outlined' severity="error">This is an error alert — check it out!</Alert>
            <Alert variant='outlined' severity="warning">This is a warning alert — check it out!</Alert>
            <Alert variant='outlined' severity="info">This is an info alert — check it out!</Alert>
            <Alert variant='outlined' severity="success">This is a success alert — check it out!</Alert>

            <Alert variant='filled' severity="error">This is an error alert — check it out!</Alert>
            <Alert variant='filled' severity="warning">This is a warning alert — check it out!</Alert>
            <Alert variant='filled' severity="info">This is an info alert — check it out!</Alert>
            <Alert variant='filled'
                   severity="success"
                   icon={<CheckIcon frontSize='inherit'/>}
                   action={
                       <Button color='inherit'>UNDO</Button>
                   }
            >
                This is a success alert — check it out!</Alert>
        </Stack>
    )
}
