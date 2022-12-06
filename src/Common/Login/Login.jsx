import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { postApi } from "../../api";
import { AlertPopUp } from "../AlertPopUp/AlertPopUp";
import { timeout } from "../../utils/constant";

export const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: true,
  });
  const [alertState, setAlertState] = useState({
    message: '',
    state: 'error',
    status: false,
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    if (!(values.email && values.password)) {
      setAlertState({...alertState, message: "Please fill all the details", state: "error", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
      return;
    }
    const result = await postApi("user/login", values);

    if (result?.status === 200) {
      console.log('Result', result.data);
      localStorage.setItem("webExamEmail", result?.data?.email);
      localStorage.setItem("webExamProfilePic", result?.data?.profilePic);
      localStorage.setItem("webExamRole", result?.data?.role);
      localStorage.setItem("webExamName", result?.data?.first_name + " " + result?.data?.last_name);
      setAlertState({...alertState, message: "User successfully login", state: "success", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
      window.location.href = "/";
    } else {
      setAlertState({...alertState, message: "User successfully login", state: "error", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
    }
  };

  return (
    <div className="bg-[#f4e6e6] rounded-2xl w-[50%] p-[20px] m-auto mt-5p border-[#cbb2b2] border-[1px] fixed top-5p left-1/4 z-10">
      {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
      <h3 className="w-[100px] m-auto text-[24px] font-semibold my-2p">
        Login
      </h3>
      <div className="flex justify-evenly">
        <div>
          <img
            className="w-[250px] rounded-[20px]"
            src="https://imgs.search.brave.com/x2vGfeSjXDaRCPzSM6Q5sGAuWmf9E-p0fd9vjI3TfnE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/U09ZM2ViczFiN1NT/V2NLakd1UDdBSGFG/aiZwaWQ9QXBp"
          />
        </div>
        <div>
          <Box
            className="m-auto w-[250px]"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={values.email}
              id="input-with-sx"
              label="Email Address"
              variant="standard"
              color="primary"
              onChange={(e) => handleChange("email", e)}
            />
          </Box>
          <FormControl
            className="!mx-auto !my-2p w-[250px] !flex"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password" className="px-1p">
              Password
            </InputLabel>
            <OutlinedInput
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) => handleChange("password", e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            onClick={() => handleSubmit()}
            className="w-200px m-auto"
            sx={{ mx: "40%", mb: "50px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
