import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';


export const MuiSpeedDial = () => {
    const actions = [
        {icon: <FileCopyIcon/>, name: 'Copy'},
        {icon: <SaveIcon/>, name: 'Save'},
        {icon: <PrintIcon/>, name: 'Print'},
        {icon: <ShareIcon/>, name: 'Share'}
    ]

    return (
        <Box sx={{height:320, transform: 'translateZ(0px)', flexGrow: 1}}>
            <SpeedDial
                ariaLabel='Speed Dial openIcon'
                sx={{position: "absolute", bottom: 16, right: 16}}
                icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipOpen
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
