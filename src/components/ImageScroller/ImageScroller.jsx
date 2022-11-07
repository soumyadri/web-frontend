import React, {useState } from "react";
import { images } from "../../utils/constant";

const styles = {
  textContainer: {
    whiteSpace: "nowrap",
    fontSize: "42px",
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "black",
    letterSpacing: "0px",
    paddingBottom: "25px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "200px",
    left: "100px",
    textAlign: "left",
    lineHeight: "2",
  },
  description: {
    fontSize: "32px",
    fontWeight: "600",
    color: "red"
  }
}

export default function ImageCarouselContainer() {
  const [identifier, setIdentifier] = useState(2);

  const handleIdentifier = (params) => {
    if(params === "left") {
      if(identifier === 0) {
        setIdentifier(2);
      } else {
        setIdentifier(identifier - 1);
      }
    } else {
      if(identifier === 2) {
        setIdentifier(0);
      } else {
        setIdentifier(identifier + 1);
      }
    }
  };

  return (
    <div>
      <div style={styles.textContainer}>
        <span>Academia School</span>
        <span style={styles.description}>We are about more than just Education.</span>
      </div>
      <button onClick={()=>handleIdentifier('left')} className="absolute top-[250px] font-bold text-[24px] left-2p text-slate-100">{'<'}</button>
      <img className="w-full h-[400px]" src={images[identifier]} loading="lazy" alt="cover" />
      <button onClick={()=>handleIdentifier('right')} className="absolute top-[250px] font-bold text-[24px] right-2p text-slate-100">{'>'}</button>
    </div>
  );
}
