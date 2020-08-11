import {useCallback, useState} from "react";
import {toastMessage} from "../components/toastyfiMessages";

export const useHttp = () => {

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            setLoading(true)
            if (body) {
                body = JSON.stringify(body)
                console.log(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                return toastMessage(data.message || 'Щось пішло не так!', 'warning')
            }

            setLoading(false)
            return data


        } catch (e) {
            return toastMessage(e.message || 'Щось пішло не так', 'error')
        }

    }, [])

    const cleanErrors = useCallback(() => {
        setErrors(null)
    }, [errors])

    return {
        request,
        errors,
        loading,
        cleanErrors
    }

}
