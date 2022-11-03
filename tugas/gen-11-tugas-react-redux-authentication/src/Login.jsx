import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { setLogin, setLogout } from "./AuthSlice"
import { useState } from "react"

export default function Login() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(evt) {
        evt.preventDefault()

        axios.post('https://dummyjson.com/auth/login', {
            username,
            password
        }).then(res => {
            console.log(res.data)
            dispatch(setLogin(res.data))
            // handleAfterLogin(res.data)
        }).catch(err => {
            console.log(err.response)
            alert(err.message)
        })
    }

    if (auth.isLogin) {
        return <Navigate to="/" />
    }

    return <>

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-teal-700">
                    Sign in
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            required
                            type="text"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}