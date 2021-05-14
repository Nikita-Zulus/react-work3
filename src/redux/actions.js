import {ADDEVENT, CHOSETHEDAY,SETSTARTDAY} from "./types.js"



export function choseTheDay(payload){
    return {
        type: CHOSETHEDAY,
        payload
    }
}
export function setStartDay(payload){
    return {
        type: SETSTARTDAY,
        payload
    }
}

export function addEvent(key,value){
    return {
        type: ADDEVENT,
        payload: {
            key,
            value,
          },
    }
}