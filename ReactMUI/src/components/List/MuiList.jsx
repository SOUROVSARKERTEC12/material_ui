import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export const MuiList = () => {
    return (
        <Stack>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                </ListItem>
            </List>
        </Stack>
    )
}
