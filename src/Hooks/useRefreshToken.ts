// @flow
// import * as React from 'react';
// import axios from "../Api/axios";
// import useAuth from "./useAuth";
//
//
// const TOKEN_URL = '/token/'
// const REFRESH_URL = '/token/refresh/'
// export const UseRefreshToken = () => {
//
//     const {setAuth} = useAuth()
//     const refresh = async () => {
//         const response = await axios.get(REFRESH_URL, {
//             withCredentials: true
//         })
//         setAuth((prev: any) => {
//             console.log(JSON.stringify(prev))
//             console.log(response.data.accessToken)
//             console.log(response.data)
//             return {...prev, accessToken: response.data.accessToken}
//         })
//         return response.data.accessToken
//     }
//     return refresh
// };
//
export default {}