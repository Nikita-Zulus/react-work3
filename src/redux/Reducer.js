import { CHOSETHEDAY,SETSTARTDAY, ADDEVENT} from "./types";
import moment from "moment";

//moment.updateLocale("en", {week:{dow:1}});

const initialState = {
    startDay: moment().clone().format("MM/DD/YYYY"),
    chosenDay: moment().clone(),
    months:["01/01/2021","02/01/2021","03/01/2021","04/01/2021","05/01/2021","06/01/2021","07/01/2021","08/01/2021","09/01/2021","10/01/2021","11/01/2021","12/01/2021",],
    events: {
        "01052021":["TaskOne","TaskTwo"],
    },
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOSETHEDAY:
            return { ...state, chosenDay: action.payload };

        case SETSTARTDAY:
            return { ...state, startDay: action.payload };
    
        case ADDEVENT:
            return {
              ...state,
             events:{...state.events ,[action.payload.key]:[...[state.events[action.payload.key]],action.payload.value]},
            };

        default:
            return state;
    }
}
