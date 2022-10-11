import {ComponentState, createContext, SetStateAction, useState} from "react";
import axios from "../Api/axios";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

type AuthContextType = {
    user: any,
    loginUser: (email: string, password: string) => void
    logoutUser: () => void
    updateAccessToken: (data: any) => void
    verifyUser: (data: any) => { success: true } | { success: false, message: string }
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)


type AuthProps = {
    children: any
}

const LOGIN_URL = '/token/'
const REFRESH_URL = '/token/refresh/'
const VERIFY_URL = '/user-verify/'


export const AuthProvider = ({children}: AuthProps) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')!) : null)

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
        }
    }
    const verifyUser = async (email: string, code: string) => {
        const response: any = await axios.post(VERIFY_URL, JSON.stringify({
            email: email,
            code: code
        }), {
            headers: {'Content-Type': 'Application/json'},
        })
        if (response.status === 200) {
            const {success, ...tokens} = response.data
            setAuthTokens(tokens)
            setUser(jwtDecode(tokens.access))
            localStorage.setItem('authTokens', JSON.stringify(tokens))
            return {success: true}
        } else if (response.status === 400) {
            return {success: false, message: 'Wrong code'}
        } else {
            return {success: false, message: 'Verification Failed. Please try again later.'}
        }
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