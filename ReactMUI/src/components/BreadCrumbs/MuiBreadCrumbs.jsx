import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import {Breadcrumbs, Link, Typography} from "@mui/material";

export const MuiBreadCrumbs = () => {
    return (
        <div role="presentation">
            <Breadcrumbs mt={2} aria-label="breadcrumb" maxItems={3} itemsAfterCollapse={2} itemsBeforeCollapse={1}>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="#"
                >
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    MUI
                </Link>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="#"
                >
                    <WhatshotIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Core
                </Link>
                <Typography
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="text.secondary"
                >
                    <GrainIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
        </div>
    );
}
