import React from "react";

const styles = {
    outerContainer: {
        background: "url(https://as2.ftcdn.net/v2/jpg/02/99/84/89/1000_F_299848927_S0EwX0P6HWGigW6qZWFIBaczKMQuq5D9.jpg)",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};

export default function RouterContainer() {
    const handleStudentRouting = () => {
        window.location.href = "/student";
    };

    return (
        <div style={styles.outerContainer} className="w-full h-[228px]">
            <span className="bg-[#ffffff61] px-2p font-bold text-[30px] text-red-600 flex mx-auto w-fit py-2p">Choose Desired Role</span>
            <div className="flex w-full justify-evenly">
                <button className="px-5p py-1p my-4p bg-orange-400 font-semibold text-[crimson] text-[18px]" onClick={handleStudentRouting}>For Student</button>
                <button className="px-5p py-1p my-4p bg-orange-400 font-semibold text-[crimson] text-[18px]">For Teacher</button>
            </div>
        </div>
    )
}