import {Stack} from "@mui/material";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const MuiPicker = () => {

    return (
        <Stack spacing={4} sx={{width: '100%'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'TimePicker',
                        'MobileTimePicker',
                        'DesktopTimePicker',
                        'StaticTimePicker',
                    ]}
                >
                    <DemoItem label="Desktop variant">
                        <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Mobile variant">
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Responsive variant">
                        <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Static variant">
                        <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
            </LocalizationProvider>
        </Stack>
    )
}
