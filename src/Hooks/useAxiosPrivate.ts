import {axiosPrivate} from "../Api/axios";
import useAuth from "./useAuth";
import useAuthTokens from "./useAuthTokens";
import {AxiosRequestConfig} from "axios";
import {useEffect} from "react";
import {Navigate} from "react-router-dom";

const UseAxiosPrivate = () => {
    const {access, refresh} = useAuthTokens()
    const {updateAccessToken, user, logoutUser} = useAuth()

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                const token = access
                if (token) {
                    if (!config.headers) return
                    config.headers['Authorization'] = 'Bearer ' + token
                }
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            res => res,
            async error => {
                const originalConfig = error.config
                if (error.response) {
                    //    Access Token Expired
                    if (error.response.status === 401 && !originalConfig._retry) {
                        originalConfig._retry = true
                        try {
                            const response = await axiosPrivate.post('/token/refresh/', {
                                refresh: refresh
                            })
                            const data = response.data
                            updateAccessToken(data)
                            return axiosPrivate(originalConfig)
                        } catch (_error) {
                            logoutUser()
                            Navigate({to: '/'})
                            return Promise.reject(_error)
                        }
                    }
                }
                return Promise.reject(error)
            }
        )
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [user, refresh, access, updateAccessToken])


    return axiosPrivate
};

export default UseAxiosPrivate