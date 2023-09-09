import {Box, Grid} from "@mui/material";

export const MuiGrid = () => {
    return (
        <>
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
               <Grid item xs={12} sm={4} md={3}><Box bgcolor='primary.light' p={2}>Item 0</Box></Grid>
               <Grid item xs={12} sm={4} md={3}><Box bgcolor='primary.light' p={2}>Item 1</Box></Grid>
               <Grid item xs={12} sm={4} md={3}><Box bgcolor='primary.light' p={2}>Item 2</Box></Grid>
               <Grid item xs={12} sm={4} md={3}><Box bgcolor='primary.light' p={2}>Item 3</Box></Grid>
            </Grid>
        </>
    )
}
