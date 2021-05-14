import React from "react";
import { connect } from "react-redux";
import {choseTheDay} from "../redux/actions.js";
import moment from "moment";


const CalendarGrid_ = ({startDay, choseTheDay, chosenDay, events}) => {
  
    const allDays = 42;
    const day = moment(startDay).clone().startOf("month").startOf("week");
    const daysArray = [...Array(allDays)].map(()=>day.add(1,"day").clone());
 
    return (
        <div className = "componentGrid">
            {
                daysArray.map((dayItem) =>(
                    <div className = {dayItem.day()===6||dayItem.day()===0?`dayCell weekend ${dayItem.format("DDMMYYYY")===chosenDay.format("DDMMYYYY")?"chosenDay":""}`:`dayCell ${dayItem.format("DDMMYYYY")===chosenDay.format("DDMMYYYY")?"chosenDay":""}`} 
                        key={dayItem.format("DDMMYYYY")}
                        onClick={()=> {
                            choseTheDay(dayItem.clone())
                        }}
                    >
                        <div className = "rowsInCell">
                            <div className = {chosenDay.format("MMMM")===dayItem.format("MMMM")?"dayNumber":"dayNumber notCurrMonth"}>
                                {dayItem.format("D")}
                            </div>
                            {Object.keys(events).map((e) => (
                                dayItem.format("DDMMYYYY")===e?events[e].map((eventItem)=>(
                                    <div className="events" key={eventItem+1}>
                                        {eventItem}
                                    </div>
                                )):null
                            ))}                     
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapDispatchToProps = {
    choseTheDay
};

const mapStateToProps = (state) => {
    return {
        startDay: state.startDay,
        chosenDay: state.chosenDay,
        events:state.events
    }
}

export const CalendarGrid = connect(mapStateToProps, mapDispatchToProps)(CalendarGrid_);