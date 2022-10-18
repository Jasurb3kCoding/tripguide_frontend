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
    return (
        <div>
            <MyProfileInfo/>
        </div>
    );
};