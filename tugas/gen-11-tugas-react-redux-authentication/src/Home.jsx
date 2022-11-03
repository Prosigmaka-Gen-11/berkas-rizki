import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function Home() {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return <>
        <Navbar />
        <main className="container max-w-screen-xl p-4 mx-auto">
            <h1 className="text-lg font-bold">Home</h1>
            <h3 className="font-semibold mt-4">"Hi, {auth.userData.firstName}"</h3>
            <div className="mt-8">Token :</div>
            <div className="p-4 border-2 border-teal-500 rounded-lg">
                <div className="break-words">{auth.token}</div>
            </div>
        </main>
    </>
}