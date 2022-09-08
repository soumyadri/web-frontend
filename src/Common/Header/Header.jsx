import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getuserDetails } from '../../containers/HomePage/api';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.5s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.5)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0.2,
      },
    },
  }));

export const Header = () => {
    const [userData, setUserData] = useState({});
    
    const getUserInfo = async () => {
        let data = await getuserDetails();
        if(data?.data?.data) {
            setUserData(data?.data?.data[0]);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div className='bg-[#1d1d1d] opacity-0.5 flex py-1p px-2p justify-between cursor-pointer'>
           <div className='text-[20px] font-bold text-black-400 flex'>
                <img className='w-4p h-4p m-1p' src="https://soumyadri.github.io/webexamcollege/Main_Icon.png" alt="logo" />
                <h3 className='my-auto mx-1p text-[white]'>Academia</h3>
            </div>
            <div className='text-[16px] font-medium text-black-500 bg-[#9a9a70] rounded-md px-1p flex text-left'>
                <h3 className='my-auto mx-1p'>{userData.first_name} {userData.last_name}</h3>
                <Stack direction="row" spacing={2} className='border-2 border-[#1f1f1f] rounded-full my-1p'>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar alt="Profile Pic" src={userData.profilePic} />
                    </StyledBadge>
                </Stack>
            </div>
        </div>
    )
}