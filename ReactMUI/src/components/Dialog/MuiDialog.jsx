import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useState} from "react";

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='dialog-title'
                    aira-describedby='dialog-description'>
                <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
                <DialogContent id='dialog-description'>Are you sure you want to submit the test?
                    You will not be able edit after submitting
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
