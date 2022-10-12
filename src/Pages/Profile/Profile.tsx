// @flow 
import * as React from 'react';
import {MyProfileInfo} from "../../Components/Profile/MyProfileInfo/MyProfileInfo";
import {useEffect, useState} from "react";
import {ProfileInfo} from "../../Components/Profile/types";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";

type Props = {};

const PROFILE_URL = '/users/'

export const Profile = (props: Props) => {
    const [userInfo, setUserInfo] = useState<ProfileInfo>({});
    const axiosPrivate = useAxiosPrivate()
    const getUserInfo = async (id: number) => {
        const response = await axiosPrivate.get(PROFILE_URL + id)
        setUserInfo(response?.data)
    }
    return (
        <div>
            <MyProfileInfo/>
        </div>
    );
};