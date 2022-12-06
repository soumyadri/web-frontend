import React, { useState } from "react";
import { AlertPopUp } from "../../Common/AlertPopUp/AlertPopUp";
import { timeout } from "../../utils/constant";

const styles = {
    outerContainer: {
        background: "url(https://as2.ftcdn.net/v2/jpg/02/99/84/89/1000_F_299848927_S0EwX0P6HWGigW6qZWFIBaczKMQuq5D9.jpg)",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};

export default function RouterContainer() {
    const [alertState, setAlertState] = useState({
        message: '',
        state: 'error',
        status: false,
    });

    const handleStudentRouting = () => {
        var roles = localStorage.getItem("webExamRole");
        if(roles == "student") {
            window.location.href = "/student";
        } else {
            setAlertState({...alertState, message: "You don't have permission to access this page", state: "error", status: true });
            setTimeout(function() {
                setAlertState({...alertState, status: false});
            }, timeout);
        }  
    };

    const handleTeacherRouting = () => {
        var roles = localStorage.getItem("webExamRole");
        if(roles == "teacher") {
            window.location.href = "/teacherPortal";
        } else {
            setAlertState({...alertState, message: "You don't have permission to access this page", state: "error", status: true });
            setTimeout(function() {
                setAlertState({...alertState, status: false});
            }, timeout);
        } 
    }

    return (
        <div style={styles.outerContainer} className="w-full h-[228px]">
            {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
            <span className="bg-[#ffffff61] px-2p font-bold text-[30px] text-red-600 flex mx-auto w-fit py-2p">Choose Desired Role</span>
            <div className="flex w-full justify-evenly">
                <button className="px-5p py-1p my-4p bg-orange-400 font-semibold text-[crimson] text-[18px] rounded-md" onClick={handleStudentRouting}>For Student</button>
                <button className="px-5p py-1p my-4p bg-orange-400 font-semibold text-[crimson] text-[18px] rounded-md" onClick={handleTeacherRouting}>For Teacher</button>
            </div>
        </div>
    )
}