import {Rating, Stack} from "@mui/material";
import {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const [value, setValue] = useState(2)
    console.log({value})
    const handleChange=(event) =>{
        setValue(event.target.value)
    }
    return (
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size="large"
                    icon={<FavoriteIcon fontSize="inherit" color='error'/>}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    highlightSelectedOnly
            />
        </Stack>
    )
}
