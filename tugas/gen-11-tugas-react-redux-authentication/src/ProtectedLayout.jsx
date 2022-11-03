import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function ProtectedLayout() {
    const auth = useSelector(state => state.auth)

    console.log(auth.isLogin)

    if (auth.isLogin) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}