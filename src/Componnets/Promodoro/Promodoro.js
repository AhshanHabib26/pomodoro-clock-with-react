import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Promodoro.css";
import UIfx from "uifx";
import tune from '../../Audio/conTune.wav'
import Footer from "../Footer/Footer";

const Promodoro = () => {

    const [onBreak, setOnBreak] = useState(5);
    const [session, setSession] = useState(25 * 60);
    const [OnSession, setOnSession] = useState(25);
    const [breakValue, setBreakValue] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [timer, setTimer] = useState(null);

    
    const setSecToMin = sec => {
        const minute = Math.floor(sec / 60);
        const second = sec % 60;
        return `${minute >= 10 ? minute : 0 + "" + minute}:${
          second >= 10 ? second : 0 + "" + second
        }`;
      };
    
     
    
      useEffect(() => {
        if (session > 0) {
          setSession(OnSession * 60);
        }
      }, [OnSession]);
    
      useEffect(() => {
        if (breakValue > 0) {
          setBreakValue(onBreak * 60);
        }
      }, [onBreak]);

      useEffect(() => {
        if (!isPaused && session > 0 && breakValue === 0) {
          setTimer(setInterval(timeFunction, 1000));
        } else if (session === 0 && breakValue === 0) {
          const beep = new UIfx(tune, {
            volume: 0.4,
            throttleMs: 100
          });
          beep.play();
          setBreakValue(onBreak * 60);
        }
        return () => clearInterval(timer);
      }, [isPaused, session]);
    
      const timeFunction = () => {
        if (session > 0) {
          setSession(session - 1);
        } else {
          setBreakValue(breakValue - 1);
        }
      };
    
      useEffect(() => {
        if (!isPaused && breakValue > 0 && session === 0) {
          setTimer(setInterval(timeFunction, 1000));
        } else if (session === 0 && breakValue === 0) {
          const beep = new UIfx(tune, {
            volume: 0.4,
            throttleMs: 100
          });
          beep.play();
          setSession(OnSession * 60);
        }
        return () => clearInterval(timer);
      }, [isPaused, breakValue]);
      


      const startTimerControl = () => {
        if (isPaused) {
          setIsPaused(false);
        }
      };
    
    
      const resetTimerControl = () => {
        if (!isPaused) {
          setIsPaused(true);
        }
        clearInterval(timer);
        setOnSession(25);
        setOnBreak(5);
        setSession(25 * 60);
        setBreakValue(0);
      };


      const breakIncrementControl = () => {
        if (onBreak < 60 && isPaused) {
          setOnBreak(onBreak + 1);
        }
      };
    
      const sessionIncrementControl = () => {
        if (OnSession < 60 && isPaused) {
          setOnSession(OnSession + 1);
        }
      };
    
      const breakDecrementControl = () => {
        if (onBreak > 1 && isPaused) {
          setOnBreak(onBreak - 1);
        }
      };
    
      const sessionDecrementControl = () => {
        if (OnSession > 1 && isPaused) {
          setOnSession(OnSession - 1);
        }
      };
    

    
    
  return (
    <div className=" main_container">
      <div className="inner_container">
        <div className="title">
          <h1>Promodoro Timer Clock</h1>
        </div>
        <div className="display">
          <h2>{breakValue >= 0 && session === 0
            ? setSecToMin(breakValue)
            : setSecToMin(session)}</h2>
        </div>
        <div className="control">
          <p onClick={startTimerControl} className="start_btn">Start</p>
          <p onClick={resetTimerControl} className="reset_btn">Reset</p>
        </div>
        <div className="main_control">
          <div className="break_control">
            <h2>Break Length</h2>
            <div className="inner_break">
              <AiOutlinePlus onClick={breakIncrementControl} cursor="pointer" size='20px' />
              <span className="count_num">{onBreak}</span>
              <AiOutlineMinus onClick={breakDecrementControl} cursor="pointer" size='20px' />
            </div>
          </div>
          <div className="session_control">
            <h2>Session Length</h2>
            <div className="inner_session">
              <AiOutlinePlus onClick={sessionIncrementControl} cursor="pointer" size='20px' />
              <span className="count_num" >{OnSession}</span>
              <AiOutlineMinus onClick={sessionDecrementControl} cursor="pointer" size='20px'/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Promodoro;
