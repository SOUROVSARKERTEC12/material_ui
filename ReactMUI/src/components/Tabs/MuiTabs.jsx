import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import FaceIcon from "@mui/icons-material/Face";

export const MuiTabs = () => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box mt={4}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider', width: '300px'}}>
                    <TabList aria-label="Tabs example"
                             onChange={handleChange}
                             textColor='secondary'
                             indicatorColor='secondary'
                             variant='scrollable'
                             scrollButtons='auto'
                    >
                        <Tab label='Tab One' value='1' icon={<FavoriteIcon/>} iconPosition='start'/>
                        <Tab label='Tab Two' value='2' icon={<DeleteIcon/>} disabled/>
                        <Tab label='Tab Three' value='4' icon={<FaceIcon/>}/><Tab label='Tab One' value='1' icon={<FavoriteIcon/>} iconPosition='start'/>
                        <Tab label='Tab Two' value='5' icon={<DeleteIcon/>} disabled/>
                        <Tab label='Tab Three' value='6' icon={<FaceIcon/>}/>
                    </TabList>
                </Box>
                <TabPanel value='1'>Panel one</TabPanel>
                <TabPanel value='2'>Panel two</TabPanel>
                <TabPanel value='3'>Panel three</TabPanel>
                <TabPanel value='4'>Panel one</TabPanel>
                <TabPanel value='5'>Panel two</TabPanel>
                <TabPanel value='6'>Panel three</TabPanel>
            </TabContext>
        </Box>
    )
}
