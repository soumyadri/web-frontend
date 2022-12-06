import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { getuserDetails } from "../api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.5s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.5)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(4)",
      opacity: 0.2,
    },
  },
}));

export const Header = () => {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const getUserInfo = async () => {
    if (localStorage.getItem("webExamEmail")) {
      let payload = {
        email: localStorage.getItem("webExamEmail"),
        first_name: localStorage.getItem("webExamName")?.split(" ")[0],
        last_name: localStorage.getItem("webExamName")?.split(" ")[1],
        profilePic: localStorage.getItem("webExamProfilePic") || "",
      };
      setLoggedIn(true);
      setUserData(payload);
    };
    // else {
    //   let data = await getuserDetails();
    //   if(data?.data?.data) {
    //       setUserData(data?.data?.data[0]);
    //   }
    // }
  };

  const handleRoutingToHome = () => {
    window.location.href = "/";
  };

  const handleLogout = () => {
    localStorage.removeItem("webExamEmail");
    localStorage.removeItem("webExamName");
    localStorage.removeItem("webExamProfilePic");
    localStorage.removeItem("webExamRole");
    setLoggedIn(false);
  };

  const handleRegister = () => {
    window.location.href = '/signup';
  }

  const handleLogin = () => {
    window.location.href = '/login';
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="bg-[#1d1d1de1] opacity-0.5 flex py-1p px-2p justify-between cursor-pointer">
      <div
        onClick={handleRoutingToHome}
        className="text-[20px] font-bold text-black-400 flex"
      >
        <img
          className="w-4p h-4p m-1p"
          src="https://soumyadri.github.io/webexamcollege/Main_Icon.png"
          alt="logo"
        />
        <h3 className="my-auto mx-1p text-[white]">Academia</h3>
      </div>
      {loggedIn ? (
        <div className="text-[16px] font-medium text-black-500 bg-[#9a9a70] rounded-md px-1p flex text-left">
          <h3 className="my-auto mx-1p">
            {userData.first_name} {userData.last_name}
          </h3>
          <Stack
            direction="row"
            spacing={2}
            className="border-2 border-[#1f1f1f] rounded-full my-1p"
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Profile Pic" src={userData.profilePic} />
            </StyledBadge>
          </Stack>
          <Avatar
            onClick={handleLogout}
            className="m-1p"
            alt="logout"
            src="https://cdn-icons-png.flaticon.com/512/4034/4034229.png"
          />
        </div>
      ) : (
        <div className="flex w-[28%] justify-between">
          <div onClick={handleLogin} className="text-[17px] font-medium h-4p m-auto text-black-500 bg-[#9a9a70] rounded-md px-4p py-[6px] flex text-left">
            Login
          </div>
          <div onClick={handleRegister} className="text-[17px] font-medium h-4p m-auto text-black-500 bg-[#9a9a70] rounded-md px-4p py-[6px] flex text-left">
            Register
          </div>
        </div>
      )}
    </div>
  );
};