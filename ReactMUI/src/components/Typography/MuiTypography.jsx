import React from 'react';
import {Box, Typography} from "@mui/material";
import '@fontsource/roboto/300.css';

function MuiTypography(props) {
    return (
        <div>
            <Box sx={{width: '100%', maxWidth: 600}}>
                <Typography mt="20px" variant="h1">h1 Heading</Typography>
                <Typography variant="h2">h2 Heading</Typography>
                <Typography variant='h3'>h3 Heading</Typography>
                <Typography variant='h4'>h4 Heading</Typography>
                <Typography variant='h5'>h5 Heading</Typography>
                <Typography variant='h6'>h6 Heading</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>
        </div>
    );
}

export default MuiTypography;