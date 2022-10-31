import { Link } from "react-router-dom"

export default function Home() {
    return <>
        <div className="container my-2 mx-auto p-4 rounded-lg border-2 border-teal-500 ">
            <Link to={`/mahasiswa`}>
                <button
                    className="ml-0 mr-auto text-white bg-blue-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                > - List Mahasiswa
                </button>
            </Link>
        </div>
    </>
}