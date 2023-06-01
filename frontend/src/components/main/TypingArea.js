import React, { memo } from "react";
import State from "./State";



function TypingArea({
  started = false,
  incorrect = false,
  areaRef = null,
  handleKeyDown,
  remainingText = "",
  completedText = "",
  inputText = "",
  errorIndex = 0,
  duration = 0,
  handleStart
}) {
  return (
    <>
      <div className='typing-box'>
        <div className='row g-2 mb-4'>
          <State
            title='Progress'
            value={((completedText.length / inputText.length) * 100).toFixed(0)}
            symbol='%'
          />
          <State title='Errors' value={errorIndex} />
          <State title='Timer' value={`${duration}s`} />
        </div>
        <div
          className={`typing-area${started ? " active" : ""}${incorrect ? " is-error" : ""}`}
          ref={areaRef}
          aria-label='text-box'
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role='textbox'
        >
          <span className='cursor' />
          <span className='remaining-text'>{remainingText}</span>
        </div>
      </div>
      <div className='mt-4'>
        <button
          type='button'
          className='btn py-3 btn-primary w-100 h-100 fw-bold text-uppercase'
          disabled={started}
          onClick={started ? undefined : handleStart}
        >
          Start
        </button>
      </div>
    </>
  );
}

export default memo(TypingArea);
