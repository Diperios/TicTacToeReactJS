import React=require("react");


export function Square({ value, onClick}){
  return(
    <button className = 'squere' 
    onClick={onClick}
    style={{ width: "50px", height: "50px",}}
    >
      {value}
    </button>
  )
}