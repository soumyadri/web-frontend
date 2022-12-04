import React, { useEffect } from 'react';
import { useState } from 'react';

export const ResultBoard = ({result, answerSheet}) => {
    const [name, setName] = useState("");
    useEffect(()=>{
        var webExamName = localStorage.getItem("webExamName");
        setName(webExamName);
    }, []);
    
    return (
        <div className="flex w-full">
            <div className="bg-blue-50" style={{backgroundImage: "url(https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10532.jpg?w=996&t=st=1669716428~exp=1669717028~hmac=9daa07319f69c1908897e48d2e5584b76a5687db231bd5fda920886e10882b5d)", width: "63%", height: "88.5vh", backgroundRepeat: "no-repeat"}}></div>
            <div className="bg-green-100 w-[37%] p-2p border-l-4 border-green-200 border-solid">
                <span className="font-bold text-xl border-b-2 border-green-500 border-solid pb-1p">{name}'s Result Board</span>
                
                <div className="flex flex-col text-lg font-serif my-4p">
                    <span className="my-1p"> Questions Attempt : <span className="font-semibold">{Object.keys(answerSheet).length}</span></span>
                    <span className="my-1p"> Correct Attempt : <span className="font-semibold">{result.data.data?.correct || 0}</span></span>
                    <span className="my-1p"> Wrong Attempt : <span className="font-semibold">{result.data.data?.wrong || 0}</span></span>
                    <span className="my-1p"> Total Marks : <span className="font-semibold">{result.data.data?.marks || 0}</span></span>
                    <span className="my-1p"> Grade : <span className="font-semibold">{result.data.data?.grade || "Fail"}</span></span>
                </div>
            </div>
        </div>
    )
}