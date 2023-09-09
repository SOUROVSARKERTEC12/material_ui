import {Link, Stack, Typography} from "@mui/material";

export const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href="#">Link</Link>
            <Typography variant='h6'>
                <Link href="#" color="secondary" underline="hover">Link</Link>
            </Typography>
        </Stack>
    )
}
