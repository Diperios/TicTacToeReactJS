import React=require("react");


export function Square({ value, onClick}){
  return(
    <button className = 'square' 
    onClick={onClick}
    
    >
      {value}
    </button>
  )
}