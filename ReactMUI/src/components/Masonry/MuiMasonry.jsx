import {Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography} from "@mui/material";
import {Masonry} from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiMasonry = () => {
    const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

    return (
        <Box sx={{width: 500, minHeight: 400}}>
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) =>(
                  <Paper key={index} sx={{
                      // display:'flex',
                      // justifyContent: 'center',
                      // alignItems:'center',
                      // height,
                      border: '1px solid'}}>
                      <Accordion sx={{minHeight: height}}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography>Accordion {index+1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>Content</AccordionDetails>
                      </Accordion>
                  </Paper>
                ))}
            </Masonry>
        </Box>
    )
}
