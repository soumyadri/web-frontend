import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getAllQuestions } from "../../Common/api";
import { postApi } from "../../api";

export const DeleteQuestionPortal = () => {
  const [allQuestions, setQuestions] = useState([]);

  const getQuestionDetails = async () => {
    const result = await getAllQuestions();
    if (result.status === 200) {
      setQuestions(result?.data.data);
    }
  };

  useEffect(() => {
    getQuestionDetails();
  }, []);

  const handleQuestionDelete = async (params) => {
    const result = await postApi(`question/delete/${params._id}`);
    if(result?.status == 200) {
        alert("Deleted successfully");
        getQuestionDetails();
    } else {
        alert("Something went wrong");
    }
  };

  return (
    <div
      className="w-4/5 h-[88vh] bg-green-400 p-4p"
      style={{
        background:
          "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)",
      }}
    >
      <span className="text-lg font-semibold rounded-lg py-2p px-4p bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">
        Delete Question
      </span>
      <div className="bg-slate-200 rounded-lg p-2p  gap-3p py-4p border-2 border-solid border-blue-400">
        <Box
          sx={{ margin: "auto" }}
          className="w-[100%] h-[56px] bg-white scroll-auto min-h-[400px] overflow-auto"
        >
          {allQuestions &&
            allQuestions.map((el, key) => {
              return (
                <div className="p-2p flex border-2 border-solid border-blue-50">
                  <span className="px-1p">{key + 1}.</span>
                  <span onClick={()=>handleQuestionDelete(el, key)} className="px-1p w-4p py-[3px] cursor-pointer"><img src="https://img.icons8.com/fluency/512/delete-forever.png" /></span>
                  <span className="px-1p">{el.question}</span>
                </div>
              );
            })}
        </Box>
      </div>
    </div>
  );
};
