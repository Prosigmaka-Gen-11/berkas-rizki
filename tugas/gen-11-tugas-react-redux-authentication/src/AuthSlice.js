import { createSlice } from "@reduxjs/toolkit";

function getUserFromLocal() {
    const savedUserData = localStorage.getItem('userData')

    if (savedUserData) {
        const parsedUserData = JSON.parse(savedUserData)
        return parsedUserData
    } else {
        return {}
    }
}

function getTokenFromLocal() {
    const savedToken = localStorage.getItem('token')
    return savedToken ?? null
}

const isLogin = getTokenFromLocal() != null

const initialState = {
    userData: getUserFromLocal(),
    token: getTokenFromLocal(),
    isLogin: isLogin
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            const userData = action.payload

            state.userData = userData
            state.token = userData.token
            // state.isLogin = true
            // state.isLogin = userData.token ?? null
            state.isLogin = userData.token ?? null

            localStorage.setItem('userData', JSON.stringify(userData))
            localStorage.setItem('token', userData.token)
        },

        setLogout: (state) => {
            localStorage.removeItem('userData')
            localStorage.removeItem('token')
            state.userData = {}
            state.token = null
            state.isLogin = false
        }
    }
})

export const { setLogin, setLogout } = userSlice.actions

export const selectUser = (state) => state.user.userData
export const selectToken = (state) => state.user.token

export default userSlice.reducer