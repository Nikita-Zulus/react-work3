import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {addEvent} from "../redux/actions.js";


function TaskCreator_({addEvent,chosenDay}){
    const[task,setTask] = useState("");
    let idDay = chosenDay.clone().format("DDMMYYYY");
    return(
        <div>
            <NavLink to={"/"}>
                <button onClick={()=>addEvent(idDay,task)}>Добавить задачу</button>
            </NavLink>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        </div>
    )

}

const mapDispatchToProps = {
    addEvent
};

const mapStateToProps = (state) => {
    return {
        chosenDay: state.chosenDay,
    }
}

export const TaskCreator = connect(mapStateToProps, mapDispatchToProps)(TaskCreator_);