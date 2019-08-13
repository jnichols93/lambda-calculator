import React, {useState} from "react";

const Display = () => {
  const [displayState, setDisplayState]= useState(0);
  return  (<div className ='display'><span>{displayState}</span></div>);
};
