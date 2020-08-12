import {ADD_CLASS, ADD_MESSAGE_FORM_CONTACT, ADD_TASK, CHANGE__STATUS, REMOVE_TASK} from './types'

export const addClass = (data) => {
    return {
        type: ADD_CLASS,
        payload: !data
    }
}

export const addTask = data => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export const removeTask = data => {
    return {
        type: REMOVE_TASK,
        payload: data
    }
}

export const changeStatus = data => {
    return (dispatch) => {
        dispatch({
            type: CHANGE__STATUS,
            payload: data.name
        })
    }
}

export const addMessageFromContactForm = (data) => {
    return {
        type: ADD_MESSAGE_FORM_CONTACT,
        payload: data
    }
}

