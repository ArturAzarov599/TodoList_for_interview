import {ADD_TASK, REMOVE_TASK} from "./types";

const initialState = {
    taskList: []
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, taskList: state.taskList.concat(action.payload
                )
            }

        case REMOVE_TASK:
            return {
                ...state, taskList: state.taskList.filter(element => element.name !== action.payload)
            }

        default:
            return state
    }
}
