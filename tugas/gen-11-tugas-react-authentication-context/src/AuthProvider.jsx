import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [userData, setUserData] = useState(function () {
        const savedUserData = localStorage.getItem('userData')

        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData)
            return parsedUserData
        } else {
            return {}
        }
    })

    const [token, setToken] = useState(function () {
        const savedToken = localStorage.getItem('token')
        return savedToken ?? null
    })

    const isLogin = token != null

    function handleAfterLogin(data) {
        setUserData(data)
        setToken(data.token)
        localStorage.setItem('userData', JSON.stringify(data))
        localStorage.setItem('token', data.token)
    }

    function logout() {
        localStorage.removeItem('userData')
        localStorage.removeItem('token')
        setUserData({})
        setToken(null)
    }

    return <AuthContext.Provider value={{
        isLogin,
        userData,
        token,
        setUserData,
        setToken,
        handleAfterLogin,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}