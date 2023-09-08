import { Box, Stack } from "@mui/material";

export const MuiBox = () => {
    const containerStyle = {
        borderRadius: '5px', // Add the borderRadius property here
    };

    const boxStyle = {
        width: '100px',
        height: '100px',
        // backgroundColor: 'primary.dark',
        // '&:hover': {
        //     backgroundColor: 'primary.main',
        //     opacity: [0.9, 0.8, 0.7],
        // },
    };

    return (
        <Stack direction="row" border={2} borderRadius={5} bgcolor='green'>
            <Box sx={containerStyle}>
                <Box sx={{ ...boxStyle, borderRadius: '5px 0 0 5px' }}>
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
                <Box sx={{ ...boxStyle, borderRadius: '0 5px 5px 0' }}>
                    Departure Airport
                </Box>
            </Box>
        </Stack>
    );
};
