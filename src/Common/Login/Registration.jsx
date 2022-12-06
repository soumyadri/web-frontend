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
import { timeout } from "../../utils/constant";
import { AlertPopUp } from "../AlertPopUp/AlertPopUp";

export const Registration = () => {
  const [alertState, setAlertState] = useState({
    message: '',
    state: 'error',
    status: false,
  });
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: true,
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
    let payload = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    if (!(values.name && values.email && values.password)) {
      setAlertState({...alertState, message: "please fill all the details", state: "error", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
      return;
    }
    if (
      values.name &&
      values.name.split(" ") &&
      values.name.split(" ").length > 1
    ) {
      payload.first_name = values.name.split(" ")[0];
      payload.last_name = values.name.split(" ")[1];
    } else {
        setAlertState({...alertState, message: "please enter full name", state: "error", status: true });
        setTimeout(function() {
          setAlertState({...alertState, status: false});
        }, timeout);
        return;
    }
    payload.email = values.email;
    payload.password = values.password;
    payload.gender = "male";

    const result = await postApi("user/signup", payload);

    if (result?.status === 200) {
      localStorage.setItem("webExamEmail", payload.email);
      localStorage.setItem("webExamProfilePic", "");
      localStorage.setItem("webExamRole", "student");
      localStorage.setItem("webExamName", payload?.first_name + " " + payload?.last_name);
      setAlertState({...alertState, message: "User registered successfully", state: "success", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
      document.cookie = `${payload.email}`;
      window.location.href = "/";
    } else {
      setAlertState({...alertState, message: "Something went wrong", state: "error", status: true });
      setTimeout(function() {
        setAlertState({...alertState, status: false});
      }, timeout);
    }
  };

  return (
    <div className="bg-[#f6eaea] rounded-2xl w-[50%] p-[20px] m-auto mt-5p border-[#cbb2b2] border-[1px] fixed top-5p left-1/4 z-10">
      {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
      <h3 className="w-[100px] m-auto text-[24px] font-semibold my-2p">
        Registration
      </h3>
      <div className='flex justify-evenly'>
        <div>
          <img className="w-[300px] rounded-[20px]" src="https://imgs.search.brave.com/x2vGfeSjXDaRCPzSM6Q5sGAuWmf9E-p0fd9vjI3TfnE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/U09ZM2ViczFiN1NT/V2NLakd1UDdBSGFG/aiZwaWQ9QXBp" />
        </div>
        <div>
          <Box
            className="m-auto w-[250px]"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={values.name}
              id="input-with-sx"
              label="Full Name"
              variant="standard"
              color="primary"
              onChange={(e) => handleChange("name", e)}
            />
          </Box>
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
