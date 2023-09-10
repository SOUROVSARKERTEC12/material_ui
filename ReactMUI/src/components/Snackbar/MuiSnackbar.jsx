import Button from "@mui/material/Button";
import {Alert, Snackbar} from "@mui/material";
import {forwardRef, useState} from "react";


const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
})

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleSnackbarClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleSnackbarClick}>Submit</Button>
            {/*<Snackbar*/}
            {/*    autoHideDuration={4000}*/}
            {/*    message="Form Submitted Successfully"*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'bottom',*/}
            {/*        horizontal: 'center'*/}
            {/*    }*/}
            {/*    }*/}
            {/*/>*/}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}
