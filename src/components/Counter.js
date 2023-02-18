import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [time, setTime] = useState(0);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputTime = Math.floor(event.target.value);
      if (isNaN(inputTime)) {
        setTime(0);
      } else {
        setTime(inputTime);
      }
    }
  };
  useEffect(() => {
    let intervalId;
    if (time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setTime(0);
    }
    return () => clearInterval(intervalId);
  }, [time]);
  return (
    <>
      <div>
        <input id="timecount" onKeyDown={handleKeyDown} type="text"/>
        <div id="currenttime">{time}</div>
      </div>
    </>
  );
}
