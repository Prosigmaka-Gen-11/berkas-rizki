import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";

export default function Todo() {
    const [todos, setTodos] = useState([])

    const auth = useSelector(state => state.auth)

    function getTodos() {
        axios.get('https://dummyjson.com/auth/todos', {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        }).then(res => {
            setTodos(res.data.todos)
        }).catch(err => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getTodos()
    }, [])

    return <>
        <Navbar />

        <main className="container max-w-screen-xl p-4 mx-auto">
            <table className="mx-auto w-full shadow-md">
                <thead className="bg-teal-600 text-white rounded-lg">
                    <tr>
                        <th className="py-3 px-6">Todo List</th>
                        <th className="py-3 px-6">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <tr key={item.id} className="even:bg-gray-100 border-b">
                            <td className="py-4 px-6">{item.todo}</td>
                            <td className="flex justify-center py-4 px-6">
                                {item.completed ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-teal-500 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>

    </>
}