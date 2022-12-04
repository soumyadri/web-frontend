import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { postApi } from "../../api";

const payload = {
  question: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  answer: "",
  subject: "",
  credits: "",
};

export const AddQuestionPortal = () => {
  const [subject, setSubject] = useState("html");
  const [values, setValues] = useState(payload);

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handlePayloadChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = async () => {
    if(subject && values && values.question && values.optionA && values.optionB && values.optionC && values.optionD && values.answer && values.credits) {
        setValues({...values, "subject": subject});
        const result = await postApi('question/add', values);
        if(result?.status == 200) {
          alert('Success');
        } else {
          alert('Something went wrong');
        }
    } else {
      alert('Something went wrong');
    }
  }

  return (
    <div className="w-4/5 h-[88vh] bg-green-400 p-4p" style={{background: "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)"}}>
      <span className="text-lg font-semibold rounded-lg py-2p px-4p bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">Add Question</span>
      <div className="bg-slate-200 rounded-lg p-2p grid grid-cols-2 gap-3p py-4p border-2 border-solid border-blue-400">
        <Box
          sx={{ display: "flex", margin: "auto" }}
          className="bg-green-50 w-[90%] h-[56px]"
        >
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

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Please enter Question"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('question', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Option A"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('optionA', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Option B"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('optionB', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Option C"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('optionC', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Option D"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('optionD', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Your Answer"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('answer', e.target.value)}
          />
        </Box>

        <Box
          className="m-auto w-[90%] opacity-90 bg-green-50 h-[56px] rounded-lg"
          sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
        >
          <TextField
            required
            className="w-full"
            id="outlined-required"
            label="Credits for Question"
            defaultValue=""
            onChange={(e)=>handlePayloadChange('credits', e.target.value)}
          />
        </Box>
      </div>
      <div>
        <button onClick={handleSubmit} className="shadow-lg shadow-blue-200 border-2 border-solid border-blue-400 text-lg font-semibold rounded-lg py-2p px-4p bg-green-200 relative bottom-[5px] ml-auto flex">Submit</button>
      </div>
    </div>
  );
};
