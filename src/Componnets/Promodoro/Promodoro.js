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
          <p className="start_btn">Start</p>
          <p className="reset_btn">Reset</p>
        </div>
        <div className="main_control">
          <div className="break_control">
            <h2>Break Length</h2>
            <div className="inner_break">
              <AiOutlinePlus size='20px' />
              <span className="count_num">5</span>
              <AiOutlineMinus size='20px' />
            </div>
          </div>
          <div className="session_control">
            <h2>Session Length</h2>
            <div className="inner_session">
              <AiOutlinePlus size='20px' />
              <span className="count_num" >25</span>
              <AiOutlineMinus  size='20px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promodoro;
