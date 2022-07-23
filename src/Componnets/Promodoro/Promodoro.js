import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Promodoro.css";

const Promodoro = () => {
  return (
    <div className=" main_container">
      <div className="inner_container">
        <div className="title">
          <h1>Promodoro Clock With React</h1>
        </div>
        <div className="display">
          <h2>25:00</h2>
        </div>
        <div className="control">
          <span>Pause</span>
          <span>Reset</span>
        </div>
        <div className="main_control">
          <div className="break_control">
            <AiOutlinePlus />
            <span>5</span>
            <AiOutlineMinus />
          </div>
          <div className="session_control">
            <AiOutlinePlus />
            <span>5</span>
            <AiOutlineMinus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promodoro;
