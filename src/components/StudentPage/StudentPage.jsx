import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AlertPopUp } from "../../Common/AlertPopUp/AlertPopUp";
import { timeout } from '../../utils/constant';

export const StudentPage = () => {
    const [subject, setSubject] = React.useState('');
    const [alertState, setAlertState] = useState({
        message: '',
        state: 'error',
        status: false,
    });

    const handleChange = (event) => {
      setSubject(event.target.value);
    };

    const handleRouting = () => {
        if(subject) {
            window.location.href = `/exampage?subject=${subject}`;
        } else {
            setAlertState({...alertState, message: "Please select a subject", state: "error", status: true });
            setTimeout(function() {
                setAlertState({...alertState, status: false});
            }, timeout);
        }
    };

    return (
        <div className="flex" style={{backgroundImage: "url(https://d1uavkppl1300i.cloudfront.net/images/online-entrance-exam.png)", width: "98.9vw", height: "88.5vh"}}>
            {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
            <div className="w-[50%] text-[24px] font-semibold mt-[200px] h-[200px] text-center bg-[#ffffff89] p-2p">
                <span>Choose a subject of your choice</span>
                <div className='text-lg flex my-4p mx-auto justify-evenly w-[600px]'>
                    <Box sx={{ minWidth: 150 }} className="bg-green-200">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subject}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={"html"}>HTML</MenuItem>
                            <MenuItem value={"css"}>CSS</MenuItem>
                            <MenuItem value={"javascript"}>Javascript</MenuItem>
                            <MenuItem value={"react"}>React</MenuItem>
                          </Select>
                        </FormControl>
                    </Box>
                    <button onClick={handleRouting} className="bg-green-300 py-1p px-4p rounded-3xl text-base">Start Exam</button>
                </div>
            </div>
        </div>
    )
}