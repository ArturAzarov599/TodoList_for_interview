import {ADD_TASK} from "./types";
import {toastMessage} from "../components/toastyfiMessages";

const spanList = ['fuck', 'xyz', 'Hello There!']

export const spanListMiddleWare = () => {
    return function (next) {
        return function (action) {
            if (action.type === ADD_TASK) {
                const listOfSpan = spanList.filter(word => word.includes(action.payload.name))
                if (listOfSpan.length > 0) {
                    toastMessage('You are spammer!', 'info')
                    return
                }
            }
            return next(action)
        }
    }
}
