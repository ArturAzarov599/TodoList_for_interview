import {useCallback, useEffect, useState} from "react";

export const useAuthorization = () => {

    const storageName = 'Authorization'
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id, email) => {
        setToken(jwtToken)
        setUserId(id)
        setEmail(email)

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            userId: id,
            email: email,
        }))

    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName)
        setToken(null)
        setUserId(null)
        setEmail(null)
    }, [])

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token && data.email) {
            login(data.token, data.userId, data.email)
        }

    }, [login])

    return {
        login,
        logout,
        email,
        userId,
        token
    }

}
