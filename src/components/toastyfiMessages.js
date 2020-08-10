import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const toastMessage = (data, type) => {
    toast(data, {
        className:'toast__margin',
        position: toast.POSITION.TOP_RIGHT, // default value!
        pauseOnHover: false,
        type: type
    })
}



