import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../../Common/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const ExamPage = () => {
  const [questionSet, setQuestionSet] = useState([]);
  const [subject, setSubject] = useState("");
  const [clockTimer, setClockTimer] = useState(600);

  const getQuestionDetails = async (subject) => {
    const result = await getAllQuestions(subject);
    if (result.status === 200) {
      setQuestionSet(result?.data.data);
    };
  };

  const calculateTime = (sec) => {
    let minute = Math.floor(sec / 60);
    let second = sec % 60;
    return `${minute}:${second}`;
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const subject = query.get('subject');
    setSubject(subject);
    getQuestionDetails(subject);
  }, []);

  useEffect(() => {
    if(clockTimer != 0) {
        setTimeout(() => {
            setClockTimer(clockTimer - 1);
        }, 1000);
    } else {
        console.log("Done");
    }
  }, [clockTimer]);

  return (
    <div className="h-full w-full bg-blue-100 pb-3p pt-3p">
      <div className="flex w-[80%] m-auto">
        <span className="w-1/2 text-xl font-semibold pt-4p">
          {`Welcome to the ${subject} Exam`}
        </span>
        <div className="flex w-1/2 text-right justify-between pt-4p">
            <span>Remaining Time: <span className="font-semibold">{calculateTime(clockTimer)} sec</span></span>
            <button className="bg-green-300 h-4p w-[200px] border-2 border-solid border-cyan-200 text-md font-semibold">Submit</button>
        </div>
      </div>
      <div className="flex flex-col rounded-xl w-[80%] mx-auto my-4p bg-blue-50 border-solid border-4 border-cyan-400 p-4p">
      {questionSet.map((el, key) => (
        <FormControl className="!my-1p">
          <FormLabel id="demo-radio-buttons-group-label" className="text-lg">
            {key + 1}. {el.question}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={null}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={el.optionA}
              control={<Radio />}
              label={el.optionA}
            />
            <FormControlLabel
              value={el.optionB}
              control={<Radio />}
              label={el.optionB}
            />
            <FormControlLabel
              value={el.optionC}
              control={<Radio />}
              label={el.optionC}
            />
            <FormControlLabel
              value={el.optionD}
              control={<Radio />}
              label={el.optionD}
            />
          </RadioGroup>
        </FormControl>
      ))}
      </div>
    </div>
  );
};