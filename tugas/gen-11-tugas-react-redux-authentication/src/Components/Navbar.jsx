import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../AuthSlice"


export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    // const { logout } = useContext(AuthContext)

    // const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(setLogout())
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-600 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        >HOME
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    to="/todo"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    Todo List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/quote"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    Quote
                                </Link>
                            </li>
                            <li className="nav-item ml-7">
                                <button onClick={handleLogout}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-red-500 hover:opacity-75 border-2 border-red-500 rounded-lg"
                                >
                                    logout
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}