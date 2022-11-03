import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";

export default function Quote() {
    const [quotes, setQuotes] = useState([])

    const auth = useSelector(state => state.auth)

    function getQuotes() {
        axios.get('https://dummyjson.com/auth/quotes', {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        }).then(res => {
            setQuotes(res.data.quotes)
        }).catch(err => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return <>
        <Navbar />

        <main className="container max-w-screen-xl p-4 mx-auto">
            <table className="mx-auto w-full shadow-md">
                <thead className="bg-teal-600 text-white rounded-lg">
                    <tr>
                        <th className="py-3 px-6">Quote</th>
                        <th className="py-3 px-6">Author</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((item) => (
                        <tr key={item.id} className="even:bg-gray-100 border-b">
                            <td className="py-4 px-6">{item.quote}</td>
                            <td className="py-4 px-6 text-center">{item.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </>
}