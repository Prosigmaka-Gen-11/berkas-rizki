import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Components/Navbar";

export default function Home() {
    const { userData, token, logout } = useContext(AuthContext)

    function handleLogout() {
        logout()
    }

    return <>
        <Navbar />
        <main className="container max-w-screen-xl p-4 mx-auto">
            <h1 className="text-lg font-bold">Home</h1>
            <h3 className="font-semibold mt-4">"Hi, {userData.firstName}"</h3>
            <div className="mt-8">Token :</div>
            <div className="p-4 border-2 border-teal-500 rounded-lg">
                <div className="break-words">{token}</div>
            </div>
        </main>
    </>
}