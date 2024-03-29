import React from "react";
import { GetCarousolImages } from "../../Hooks/GetCarousolImages";

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
    background: "#ffffff52",
    padding: "0 30px",
  },
  description: {
    fontSize: "32px",
    fontWeight: "600",
    color: "red"
  }
}

export default function ImageCarouselContainer() {
  const { image, handleIdentifier } = GetCarousolImages(0);

  return (
    <div>
      <div style={styles.textContainer}>
        <span>Academia School</span>
        <span style={styles.description}>We are about more than just Education.</span>
      </div>
      <button onClick={()=>handleIdentifier('left', false)} className="absolute top-[250px] font-bold text-[24px] left-2p text-slate-100">{'<'}</button>
      <img className="w-full h-[70dvh]" src={image} loading="lazy" alt="cover" />
      <button onClick={()=>handleIdentifier('right', false)} className="absolute top-[250px] font-bold text-[24px] right-2p text-slate-100">{'>'}</button>
    </div>
  );
}
