// import React,{useState} from 'react';
import { textColor } from "./Recoil";
import { useRecoilState } from "recoil";
import styled from "./Button.module.css";

function Button() {
  const [col, setCol] = useRecoilState(textColor);
  function colorChanger() {
    setCol(col === "blue" ? "red" : "blue");
  }
  const buttonStyle = {
    backgroundColor: col,
    color: "white",
    width: "600px",
    fontFamily: "Sans-serif",
    padding: "10px",
    margin: "100px",
    fontSize: "2rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  };
  return (
    <div className={styled.container}>
      <p style={buttonStyle}>Hii,Change the color on Click the button</p>
      <button onClick={colorChanger} className={styled.btn}>
        ClickMe
      </button>
    </div>
  );
}
export default Button;
