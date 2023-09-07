import {Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, {useState} from 'react';

export const MuiButton = () => {
    const [formats, setFormats] = useState([]);
    console.log(formats)

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text" href='https://google.com'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="text" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="outlined" color="success">Success</Button>
            </Stack>
            <Stack display="block" spacing={2} direction='row'>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" size='large' startIcon={<SendIcon/>} onClick={() => alert("Clicked")}
                        disableRipple>Send1</Button>
                <Button variant="contained" size='large' endIcon={<SendIcon/>} disableElevation>Send2</Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup
                    variant="outlined"
                    orientation="vertical"
                    size="small"
                    color="warning"
                    aria-label='alignment button group'
                >
                    <Button onClick={()=> alert('left clicked')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label='text formats'
                    value={formats}
                    exclusive
                    onChange={handleFormat}
                    size="large"
                    color="error"
                    orientation="vertical"
                >
                    <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
