import React, { useRef, useReducer } from "react";
import Layout from "./components/main/Layouts";
import TypingArea from "./components/main/TypingArea";
import Result from "./components/main/Result";
import { allowedKeys, generateRandomWords } from "./helper";
import './project.css'


const initialState = {
  inputText: "Welcome, click start to begin the one-minute typing speed test",
  remainingText: "Welcome, click start to begin the one-minute typing speed test",
  completedText: "",
  showStats: false,
  progress: 0,
  accuracy: 0,
  errorIndex: 0,
  correctIndex: 0,
  wpm: 0,
  duration: 60,
  incorrect: false,
  started: false,
};

const reducer = (state, action) => {
  const randomWords = generateRandomWords();

  switch (action.type) {
    case "START":
      return {
        ...state,
        started: true,
        showStats: false,
        inputText: randomWords,
        remainingText: randomWords,
      };
    case "END":
      return {
        ...state,
        started: false,
        showStats: true,
        inputText: state.inputText,
        remainingText: state.remainingText,
        duration: state.duration,
      };
    case "DURATION":
      return {
        ...state,
        duration: action.payload,
      };
    case "ACCURACY":
      return {
        ...state,
        accuracy: action.payload,
      };
    case "WPM":
      return {
        ...state,
        wpm: action.payload,
      };
    case "CORRECT":
      return {
        ...state,
        progress: state.progress + 1,
        correctIndex: state.correctIndex + 1,
        remainingText: state.remainingText.slice(1),
        completedText: state.completedText + state.remainingText.charAt(0),
        incorrect: false,
      };
    case "INCORRECT":
      return {
        ...state,
        incorrect: true,
        errorIndex: state.errorIndex + 1,
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
function Project() {
    const [
      {
        inputText,
        remainingText,
        completedText,
        showStats,
        progress,
        accuracy,
        errorIndex,
        correctIndex,
        wpm,
        duration,
        incorrect,
        started,
      },
      dispatch,
    ] = useReducer(reducer, initialState);
  
    const interval = useRef(null);
    const areaRef = useRef(null);
  
    const handleStart = () => {
      dispatch({ type: "START" });
      if (areaRef.current) areaRef.current.focus();
  
      // Timer
      const now = Date.now();
      const seconds = now + 60 * 1000;
  
      interval.current = window.setInterval(() => {
        const secondLeft = Math.round((seconds - Date.now()) / 1000);
        if (secondLeft <= 0) {
          dispatch({ type: "END" });
          if (interval.current) window.clearInterval(interval.current);
        }
        dispatch({ type: "DURATION", payload: secondLeft });
      }, 1000);
    };
  
    const handleKeyDown = (e) => {
        if (showStats || !started || duration === 0) return;
      
        e.preventDefault();
        const { key } = e;
      
        if (allowedKeys.includes(key) && key !== "Shift") {
          if (key === inputText.charAt(progress)) {
            dispatch({ type: "CORRECT" });
          } else {
            dispatch({ type: "INCORRECT" });
      
          }
          if (progress > 5)
            dispatch({
              type: "ACCURACY",
              payload: Math.floor(((progress - errorIndex) / progress) * 100),
            });
      
          if (progress + 1 === inputText.length || errorIndex >= 50)
            dispatch({ type: "END" });
          // set wpm
          dispatch({ type: "WPM", payload: Math.round(correctIndex / 5) });
        }
      };
      
      const handleReload = () => {
        dispatch({ type: "RESET" });
        setTimeout(() => handleStart(), 100);
      };
      return (
        <>
          <Layout>
            {showStats ? (
              <Result
                completedText={completedText}
                inputText={inputText}
                errorIndex={errorIndex}
                accuracy={accuracy}
                wpm={wpm}
                showStats={showStats}
                handleReload={handleReload}
              />
            ) : (
              <TypingArea
                completedText={completedText}
                inputText={inputText}
                errorIndex={errorIndex}
                duration={duration}
                started={started}
                incorrect={incorrect}
                areaRef={areaRef}
                handleKeyDown={handleKeyDown}
                remainingText={remainingText}
                handleStart={handleStart}
              />
            )}
          </Layout>
        </>
      );
    }
    
    export default Project;
    