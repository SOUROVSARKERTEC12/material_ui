import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>IP Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableData.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const TableData = [
    {
        "id": 1,
        "first_name": "Tommie",
        "last_name": "Farrand",
        "email": "tfarrand0@wikimedia.org",
        "gender": "Female",
        "ip_address": "102.107.21.190"
    }, {
        "id": 2,
        "first_name": "Sheeree",
        "last_name": "Giovanitti",
        "email": "sgiovanitti1@scientificamerican.com",
        "gender": "Bigender",
        "ip_address": "87.11.49.20"
    }, {
        "id": 3,
        "first_name": "Adara",
        "last_name": "Tincey",
        "email": "atincey2@a8.net",
        "gender": "Female",
        "ip_address": "143.180.79.186"
    }, {
        "id": 4,
        "first_name": "Duane",
        "last_name": "Colquit",
        "email": "dcolquit3@360.cn",
        "gender": "Male",
        "ip_address": "147.93.29.192"
    }, {
        "id": 5,
        "first_name": "Elayne",
        "last_name": "Davidson",
        "email": "edavidson4@seattletimes.com",
        "gender": "Non-binary",
        "ip_address": "227.38.229.24"
    }, {
        "id": 6,
        "first_name": "Basil",
        "last_name": "Body",
        "email": "bbody5@is.gd",
        "gender": "Male",
        "ip_address": "210.23.143.84"
    }, {
        "id": 7,
        "first_name": "Georas",
        "last_name": "Laverack",
        "email": "glaverack6@livejournal.com",
        "gender": "Male",
        "ip_address": "11.48.178.70"
    }, {
        "id": 8,
        "first_name": "Colan",
        "last_name": "Fernehough",
        "email": "cfernehough7@tinyurl.com",
        "gender": "Male",
        "ip_address": "113.157.79.198"
    }, {
        "id": 9,
        "first_name": "Loy",
        "last_name": "Strode",
        "email": "lstrode8@google.fr",
        "gender": "Male",
        "ip_address": "208.166.248.58"
    }, {
        "id": 10,
        "first_name": "Aldis",
        "last_name": "Pagan",
        "email": "apagan9@amazon.co.jp",
        "gender": "Male",
        "ip_address": "33.139.35.33"
    }
]