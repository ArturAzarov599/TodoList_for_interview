import {useCallback, useEffect, useState} from "react";

export const useAuthorization = () => {

    const storageName = 'Authorization data!'
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [email, setEmail] = useState(null)
    const [nameSurname, setNameSurName] = useState({
        name: null,
        surname: null
    })

    const login = useCallback((jwtToken, email, name, surname) => {
        setToken(jwtToken)
        setEmail(email)
        setNameSurName(prevState => prevState({
            name: name,
            surname: surname
        }))

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            email: email,
            nameSurname: nameSurname
        }))

    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName)
        setToken(null)
        setReady(null)
        setEmail(null)
        setNameSurName(prevState => prevState({
            name: null,
            surname: null
        }))
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token && data.email && data.nameSurname) {
            login(data.token, data.email, data.nameSurname)
        }
    }, [])

    return {login, logout, ready, email, token}

}
