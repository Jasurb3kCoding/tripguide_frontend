import {ComponentState, createContext, SetStateAction, useState} from "react";
import axios from "../Api/axios";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import {useEffect} from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

type AuthContextType = {
    user: any,
    loginUser: (email: string, password: string) => void
    logoutUser: () => void
    updateAccessToken: (data: any) => void
    verifyUser: (email: string, code: string) => Promise<{ success: boolean, message?: string }>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)


type AuthProps = {
    children: any
}

const LOGIN_URL = '/token/'
const VERIFY_URL = '/user-verify/'


export const AuthProvider = ({children}: AuthProps) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null)
    const [user, setUser] = useState<any>(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')!) : null)

    const axiosPrivate = useAxiosPrivate()


    const loginUser = async (email: string, password: string) => {
        const response: any = await axios.post(LOGIN_URL, JSON.stringify({
            email: email,
            password: password
        }), {
            headers: {'Content-Type': 'Application/json'},
        })
        if (response.status === 200) {
            const data = response.data
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            await updateUserInfo()
        }
    }

    const verifyUser = async (email: string, code: string) => {

        return await axios.post(VERIFY_URL, JSON.stringify({
            email: email,
            code: code
        }), {
            headers: {'Content-Type': 'Application/json'},
        })
            .then(response => response.data)
            .then(data => {
                const {success, ...tokens} = data
                setAuthTokens(tokens)
                setUser(jwtDecode(tokens.access))
                localStorage.setItem('authTokens', JSON.stringify(tokens))
                return {success: true}
            })
            .catch(error => {
                if (error.response.status === 400) {
                    return {success: false, message: 'Wrong code'}
                } else {
                    return {success: false, message: 'Verification Failed. Please try again later.'}
                }
            })
        // if (response.status === 200) {
        //     const {success, ...tokens} = response.data
        //     setAuthTokens(tokens)
        //     setUser(jwtDecode(tokens.access))
        //     localStorage.setItem('authTokens', JSON.stringify(tokens))
        //     return {success: true}
        // } else if (response.status === 400) {
        //     return {success: false, message: 'Wrong code'}
        // } else {
        //     return {success: false, message: 'Verification Failed. Please try again later.'}
        // }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    const updateAccessToken = (data: any) => {
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }

    const updateUserInfo = async () => {
        if (!user || !('user_id' in user)) return
        const response: any = await axiosPrivate.get('/users/' + user.user_id)
            .then(response => response.data)
            .then(data => {
                setUser((prev: any) => {
                    return {...prev, ...data}
                })
            })
    }

    useEffect(() => {
        updateUserInfo()
    }, [authTokens])


    const ContextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        updateAccessToken: updateAccessToken,
        verifyUser: verifyUser,
    }
    return (
        <AuthContext.Provider value={ContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext