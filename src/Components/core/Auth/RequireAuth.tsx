import {Navigate, Outlet} from 'react-router-dom'
import useAuth from "../../../Hooks/useAuth";

const RequireAuth = () => {
    const {user} = useAuth()
    if (user) {
        return <Outlet/>
    } else {
        return <Navigate to={'/'} replace/>
    }
}

export default RequireAuth