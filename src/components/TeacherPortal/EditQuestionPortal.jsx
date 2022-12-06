import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getAllQuestions } from "../../Common/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { postApi } from "../../api";
import { timeout } from "../../utils/constant";
import { AlertPopUp } from "../../Common/AlertPopUp/AlertPopUp";

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

export const EditQuestionPortal = () => {
  const [allQuestions, setQuestions] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [subject, setSubject] = useState("html");
  const [values, setValues] = useState(payload);
  const [alertState, setAlertState] = useState({
    message: '',
    state: 'error',
    status: false,
  });

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handlePayloadChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = async () => {
    if (
      subject &&
      values &&
      values.question &&
      values.optionA &&
      values.optionB &&
      values.optionC &&
      values.optionD &&
      values.answer &&
      values.credits
    ) {
      setValues({ ...values, subject: subject, _id: null });
      const result = await postApi(`question/edit/${values._id}`, values);
      if (result?.status == 200) {
        setAlertState({...alertState, message: "Edited successfully", state: "success", status: true });
        setTimeout(function() {
            setAlertState({...alertState, status: false});
        }, timeout);
        setEditModalOpen(false);
        getQuestionDetails();
      } else {
        setAlertState({...alertState, message: "Something went wrong", state: "error", status: true });
        setTimeout(function() {
            setAlertState({...alertState, status: false});
        }, timeout);
      }
    } else {
      setAlertState({...alertState, message: "Something went wrong", state: "error", status: true });
      setTimeout(function() {
          setAlertState({...alertState, status: false});
      }, timeout);
    }
  };

  const getQuestionDetails = async () => {
    const result = await getAllQuestions();
    if (result.status === 200) {
      setQuestions(result?.data.data);
    }
  };

  useEffect(() => {
    getQuestionDetails();
  }, []);

  const handleQuestionEdit = async (params) => {
    setEditModalOpen(true);
    setValues({ ...values, ...params });
    setSubject(params.subject);
  };

  return (
    <div
      className="w-4/5 h-[88vh] bg-green-400 p-4p"
      style={{
        background:
          "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)",
      }}
    >
      {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
      <span className="text-lg font-semibold rounded-lg py-2p px-4p bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">
        Edit Question
      </span>
      <div className="bg-slate-200 rounded-lg p-2p  gap-3p py-4p border-2 border-solid border-blue-400">
        {!editModalOpen ? (
          <Box
            sx={{ margin: "auto" }}
            className="w-[100%] h-[56px] bg-white scroll-auto min-h-[400px] overflow-auto"
          >
            {allQuestions &&
              allQuestions.map((el, key) => {
                return (
                  <div className="p-2p flex border-2 border-solid border-blue-50">
                    <span className="px-1p">{key + 1}.</span>
                    <span
                      onClick={() => handleQuestionEdit(el, key)}
                      className="px-1p w-4p py-[3px] cursor-pointer"
                    >
                      <img src="https://img.icons8.com/emoji/512/pen-emoji.png" />
                    </span>
                    <span className="px-1p">{el.question}</span>
                  </div>
                );
              })}
          </Box>
        ) : (
          <div>
            <div className="grid grid-cols-2 gap-2p">
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
                  defaultValue={values.question}
                  onChange={(e) =>
                    handlePayloadChange("question", e.target.value)
                  }
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
                  defaultValue={values.optionA}
                  onChange={(e) =>
                    handlePayloadChange("optionA", e.target.value)
                  }
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
                  defaultValue={values.optionB}
                  onChange={(e) =>
                    handlePayloadChange("optionB", e.target.value)
                  }
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
                  defaultValue={values.optionC}
                  onChange={(e) =>
                    handlePayloadChange("optionC", e.target.value)
                  }
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
                  defaultValue={values.optionD}
                  onChange={(e) =>
                    handlePayloadChange("optionD", e.target.value)
                  }
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
                  defaultValue={values.answer}
                  onChange={(e) =>
                    handlePayloadChange("answer", e.target.value)
                  }
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
                  defaultValue={values.credits}
                  onChange={(e) =>
                    handlePayloadChange("credits", e.target.value)
                  }
                />
              </Box>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-blue-200 border-2 border-solid border-blue-400 text-lg font-semibold rounded-lg py-1p px-4p bg-green-200 relative top-2p ml-auto flex"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
