import {Badge, Stack} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
    return (
        <Stack mt = {4} spacing={2} direction='row'>
            <Badge badgeContent={5} color='primary'>
                <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={0} color='primary' showZero>
                <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={100} color='primary' max={999}>
                <MailIcon color="action" />
            </Badge>
            <Badge variant='dot' color='primary'>
                <MailIcon color="action" />
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
                <MailIcon color="action" />
            </Badge>
        </Stack>
    )
}
