import {Box, Stack, Divider} from "@mui/material";

export const MuiStack = () => {
    const containerStyle = {
        borderRadius: '5px', // Add the borderRadius property here
    };

    const boxStyle = {
        width: '100px',
        height: '100px'
    };

    return (
        <Stack direction="row" border={2} borderRadius={5} bgcolor='green' spacing={2}
               divider={<Divider orientation="vertical" flexItem/>}>
            <Box sx={containerStyle}>
                <Box sx={{...boxStyle, borderRadius: '5px 0 0 5px'}}>
                    Bangladesh Biman Airlines
                </Box>
            </Box>
            <Box sx={containerStyle}>
                <Box sx={boxStyle} height="100px" width="100px" bgcolor="success.light">
                    Arrival Airport
                </Box>
            </Box>
            <Box sx={containerStyle}>
                <Box sx={boxStyle} height="100px" width="100px" bgcolor="success.light">
                    Two Way
                </Box>
            </Box>
            <Box sx={containerStyle}>
                <Box sx={{...boxStyle, borderRadius: '0 5px 5px 0'}}>
                    Departure Airport
                </Box>
            </Box>
        </Stack>
    );
};
