import {ADD_CLASS} from './types'

const initialState = {
    changeClass: false
}

export const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CLASS:
            return {
                changeClass: action.payload
            }

            default:
                return state
    }
}