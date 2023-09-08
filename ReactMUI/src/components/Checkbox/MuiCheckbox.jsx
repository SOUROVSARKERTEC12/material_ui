import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {useState} from "react";

export const MuiCheckbox = () => {
    const [acceptTnC, setacceptTnC] = useState(false)
    const [skills, setskills] = useState([])

    console.log({skills})
    const handleChange = (event) => {
        setacceptTnC(event.target.checked)
    }

    const handleSkillChange = (event) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setskills([...skills, event.target.value])
        } else {
            setskills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
                />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>}
                          checkedIcon={<BookmarkIcon/>}
                          checked={acceptTnC}
                          onChange={handleChange}
                          color="success"
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel color='warning'>
                        Skills
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='ReactJS'
                            control={<Checkbox value='reactjs' checked={skills.includes('reactjs')}
                                               onChange={handleSkillChange}/>}
                        /><FormControlLabel
                        label='JavaScript'
                        control={<Checkbox value='javascript' checked={skills.includes('javascript')}
                                           onChange={handleSkillChange}/>}
                    /><FormControlLabel
                        label='Python'
                        control={<Checkbox value='python' checked={skills.includes('python')}
                                           onChange={handleSkillChange}/>}
                    />
                    </FormGroup>
                    <FormHelperText error>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}
