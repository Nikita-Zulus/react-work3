import React from "react";
import moment from "moment";


export function NameOfTheWeeks(){
    return(
        <>
            {<div style={{display:"flex",justifyContent:"space-around"}}>
            {[...Array(7)].map((_,i)=>(
                    <div key={i.toString()} className="nameOfTheWeek">{moment().day(i+1).clone().format("ddd")}</div>
                ))}
            </div>}   
        </> 
    )
}

