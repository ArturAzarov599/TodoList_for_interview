import {ADD_MESSAGE_FORM_CONTACT, ADD_TASK, CHANGE__STATUS, REMOVE_TASK} from "./types";

const initialState = {
    taskList: [],
    contactForm: []
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

        case CHANGE__STATUS:
            return {
                ...state, taskList: [...state.taskList.filter(el => {
                    if (el.name === action.payload) {
                        return el.status = true
                    }
                    return state.taskList
                })]
            }

        case ADD_MESSAGE_FORM_CONTACT: {
            return {
                ...state, contactForm: state.contactForm.concat(action.payload)
            }
        }

        default:
            return state
    }
}
