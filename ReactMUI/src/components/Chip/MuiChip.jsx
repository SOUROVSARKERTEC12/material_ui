import {Avatar, Chip, Stack} from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import {useState} from "react";

export const MuiChip = () => {
    const [chips, setChips] = useState(['chip1','chip2', 'chip3'])
    const handleDelete = (chipToDelete) =>{
        setChips(chips => chips.filter((chip)=> chip !== chipToDelete))
    }

    return (
        <Stack direction='row' spacing={2}>
            <Chip label='Chip Filled' color='secondary' size='small' icon={<FaceIcon/>}/>
            <Chip label='Chip Filled' color='error' size='small' variant='outlined'
                  avatar={<Avatar>V</Avatar>}
            />
            <Chip label='Click' color='success' onClick={() => alert('Clicked')}/>
            <Chip label='Delete' color='error' onClick={() => alert('Clicked')}
                  onDelete={() => alert('Delete handler called')}/>
            {
                chips.map((chip)=>(
                    <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)}/>
                ))
            }
        </Stack>
    )
}
