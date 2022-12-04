import React, { useState } from "react";
import { AddQuestionPortal } from "./AddQuestionPortal";
import { DeleteQuestionPortal } from "./DeleteQuestionPortal";
import { EditQuestionPortal } from "./EditQuestionPortal";

export const TeacherPortal = () => {
  const [tabClicked, setTabClicked] = useState("addQuestion");

  return (
    <div className="flex">
      <div className="w-1/5 h-[88vh] border-r-2 border-blue-300" style={{background: "url(https://img.freepik.com/free-vector/diamond-shape-golden-pattern-vector-background_1017-13783.jpg?w=740&t=st=1670140584~exp=1670141184~hmac=34edc70520cafce61f89c27d0f27ed3e65185ef5cd5b6876bc2a202deea3f967)"}}>
        <div
          onClick={() => setTabClicked("addQuestion")}
          className={`${
            tabClicked == "addQuestion" ? "bg-green-600" : "bg-blue-600"
          } h-[60px] mb-2p text-white text-[18px] p-1p cursor-pointer`}
        >
          Add Questions
        </div>
        <div
          onClick={() => setTabClicked("editQuestion")}
          className={`${
            tabClicked == "editQuestion" ? "bg-green-600" : "bg-blue-600"
          } h-[60px] mb-2p text-white text-[18px] p-1p cursor-pointer`}
        >
          Edit Questions
        </div>
        <div
          onClick={() => setTabClicked("deleteQuestion")}
          className={`${
            tabClicked == "deleteQuestion" ? "bg-green-600" : "bg-blue-600"
          } h-[60px] mb-2p text-white text-[18px] p-1p cursor-pointer`}
        >
          Delete Questions
        </div>
      </div>
      {tabClicked == "addQuestion" && (
        <AddQuestionPortal />
      )}
      {tabClicked == "editQuestion" && (
        <EditQuestionPortal />
      )}
      {tabClicked == "deleteQuestion" && (
        <DeleteQuestionPortal />
      )}
    </div>
  );
};
